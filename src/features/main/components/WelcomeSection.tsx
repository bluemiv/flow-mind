import { Button } from 'antd';

export default function WelcomeSection() {
  return (
    <section className="p-lg h-[500px] flex flex-col justify-center items-center gap-xxl">
      <h1 className="text-3xl md:text-5xl font-bold">
        Welcome to <span className="text-indigo-600">Flow</span> Mind
      </h1>
      <p className="text-md md:text-xl text-center">
        트리 기반 메모를 사용하여 아이디어를 시각적으로 정리해보세요 🚀
      </p>
      <Button size="large" type="primary">
        시작해보기
      </Button>
    </section>
  );
}
