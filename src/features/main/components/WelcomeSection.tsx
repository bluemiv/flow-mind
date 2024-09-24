import { Button } from 'antd';

export default function WelcomeSection() {
  return (
    <section className="p-lg min-h-[500px] flex flex-col justify-center items-center gap-xxl bg-gradient-to-br from-purple-400 to-blue-500 animate-gradient-bg bg-[length:200%_200%] text-white">
      <h1 className="text-3xl md:text-5xl font-bold">Welcome to Flow Mind</h1>
      <p className="text-md md:text-xl text-center">
        트리 기반 메모를 사용하여 아이디어를 시각적으로 정리해보세요 🚀
      </p>
      <Button size="large" type="primary">
        시작해보기
      </Button>
    </section>
  );
}
