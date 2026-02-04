"use client";

import React, { useState, useCallback } from 'react';
import { Conversation } from '@elevenlabs/client';
import { Mic, MicOff, PhoneOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || "agent_1401kgk3djf5fnjbnqzz215r460n";

export default function VoiceAgent() {
  const [status, setStatus] = useState<'idle' | 'connecting' | 'active' | 'error'>('idle');
  const [conversation, setConversation] = useState<Conversation | null>(null);

  const startConversation = useCallback(async () => {
    try {
      setStatus('connecting');
      
      // Request microphone access
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const conv = await Conversation.startSession({
        agentId: AGENT_ID,
        onConnect: () => {
          setStatus('active');
          console.log('Connected to Ody');
        },
        onDisconnect: () => {
          setStatus('idle');
          console.log('Disconnected');
        },
        onError: (error) => {
          console.error('Conversation error:', error);
          setStatus('error');
        },
        onModeChange: (mode) => {
          console.log('Mode changed:', mode);
        }
      });
      
      setConversation(conv);
    } catch (err) {
      console.error('Failed to start conversation:', err);
      setStatus('error');
    }
  }, []);

  const stopConversation = useCallback(async () => {
    if (conversation) {
      await conversation.endSession();
      setConversation(null);
      setStatus('idle');
    }
  }, [conversation]);

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="relative flex items-center justify-center">
        <AnimatePresence>
          {status === 'active' && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute w-64 h-64 bg-[#5FB96A] rounded-full filter blur-xl"
            />
          )}
        </AnimatePresence>

        <button
          onClick={status === 'active' ? stopConversation : startConversation}
          disabled={status === 'connecting'}
          className={`relative z-10 w-48 h-48 rounded-full flex items-center justify-center shadow-2xl transition-all transform active:scale-95 ${
            status === 'active' 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-[#5FB96A] hover:bg-[#4ea858]'
          } ${status === 'connecting' ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {status === 'active' ? (
            <PhoneOff size={64} className="text-white" />
          ) : (
            <Mic size={64} className="text-white" />
          )}
        </button>
      </div>

      <div className="text-center">
        <p className={`text-xl font-semibold ${
          status === 'active' ? 'text-[#5FB96A]' : 'text-[#4B0082]'
        }`}>
          {status === 'idle' && "Tap to talk to Ody"}
          {status === 'connecting' && "Establishing Strategic Link..."}
          {status === 'active' && "Ody is Listening..."}
          {status === 'error' && "Connection Failed. Try again?"}
        </p>
        <p className="text-gray-400 text-sm mt-2 font-mono">
          Agent ID: {AGENT_ID.slice(0, 12)}...
        </p>
      </div>
    </div>
  );
}
