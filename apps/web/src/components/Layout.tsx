import { ReactNode } from "react";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-full relative">
      {/* O Header vai entrar aqui depois */}

      {/* Container principal: px-6 afasta o texto das bordas do celular */}
      <main className="flex-1 w-full px-6 py-8 mx-auto max-w-3xl flex flex-col">
        {children}
      </main>
    </div>
  );
}
