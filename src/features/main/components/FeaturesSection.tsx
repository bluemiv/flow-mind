import { ReactNode } from 'react';

export default function FeaturesSection() {
  return (
    <section className="h-[500px] grid grid-cols-1 md:grid-cols-3 text-center">
      {[
        {
          img: '/r/i/node.png',
          title: '아이디어 노드 생성',
          desc: '아이디어 노드를 생성하고 수정하여 메모를 손쉽게 구성해보세요.',
        },
        {
          img: '/r/i/connect.png',
          title: '아이디어 시각화',
          desc: '생성한 아이디어 노드들을 선으로 연결하여, 아이디어에 관계를 지어보세요.',
        },
        {
          img: '/r/i/easy-memo.png',
          title: '손 쉽게 정리',
          desc: '노드를 드래그 앤 드롭하여 쉽게 정리헤보세요.',
        },
      ].map((v) => (
        <FeatureSectionItem key={v.title} img={v.img} title={v.title} desc={v.desc} />
      ))}
    </section>
  );
}

interface TFeatureSectionItemProps {
  img: string;
  title: string;
  desc: ReactNode;
}

function FeatureSectionItem({ img, title, desc }: TFeatureSectionItemProps) {
  return (
    <div className="p-lg flex flex-col gap-lg items-center justify-center md:transition md:ease-in-out md:duration-200 md:hover:scale-110">
      <img className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]" src={img} alt={title} />
      <h2 className="text-lg md:text-2xl font-semibold">{title}</h2>
      <p className="md:text-lg">{desc}</p>
    </div>
  );
}
