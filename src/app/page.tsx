export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-100 px-6 py-16 text-slate-900">
      <section className="mx-auto flex max-w-3xl flex-col items-start gap-8 rounded-3xl border border-orange-200 bg-white/80 p-8 shadow-xl shadow-orange-100 backdrop-blur">
        <div className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
          Next.js + TypeScript + Tailwind CSS
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Orange 프로젝트 시작
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            pnpm, Next.js App Router, TypeScript, Tailwind CSS, Axios 기반의
            초기 스캐폴드입니다.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <strong className="block text-slate-950">개발 서버</strong>
            <code>pnpm dev</code>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <strong className="block text-slate-950">검증</strong>
            <code>pnpm test</code>
          </div>
        </div>
      </section>
    </main>
  );
}
