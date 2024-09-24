import dayjs from 'dayjs';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 h-[300px] flex flex-col items-center justify-between py-xl">
      <div>
        <div>public.bluemiv@gmail.com</div>
      </div>
      <div className="text-sm">Copyright © {dayjs().year()} bluemiv. All rights reserved</div>
    </footer>
  );
}
