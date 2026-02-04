import React from 'react';
import VoiceAgent from '@/components/VoiceAgent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white p-8 md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4">
          Aigora Strategic OS&nbsp;
          <code className="font-bold text-[#4B0082]">v1.0.0</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://aigora.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <span className="font-bold text-[#5FB96A]">AIGORA</span>
          </a>
        </div>
      </div>

      <div className="relative flex flex-col items-center place-items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#4B0082] mb-4 text-center tracking-tight">
          Ody Voice Console
        </h1>
        <p className="text-gray-500 text-lg mb-16 text-center max-w-md">
          Real-time strategic infrastructure. Securely connected to the Aigora brain.
        </p>
        
        <VoiceAgent />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left gap-4">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold text-[#4B0082]">
            Strategic Hub{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Access the latest $2.5M scaling strategies and market research.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold text-[#4B0082]">
            Outreach Engine{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Review and approve Tier 1 sequences for NielsenIQ and Nestlé.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold text-[#4B0082]">
            Memory Vault{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 text-balance">
            Search 20+ years of sensory science context powered by QMD.
          </p>
        </div>
      </div>
    </main>
  );
}
