import type { NextPage } from 'next';
import FormInput from '@/components/FormInput/FormInput';
import Button from '@/components/Button/Button';
import Link from 'next/link';

const SignIn: NextPage = () => {
  return (
    <>
      <h1 className="heading1">로그인</h1>
      <form className="flex flex-col gap-3.5 py-[55px] border-b border-line">
        <FormInput id="email" type="email" labelText="이메일" />
        <FormInput id="password" type="password" labelText="비밀번호" />
        <Button text="로그인" classProp="mt-[26px]" />
        <button className="bg-[#FEE500] flex justify-center gap-1 items-center w-80 h-11 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 99.62 92.15"
          >
            <defs>
              <clipPath id="a">
                <path d="M0 595.28h841.89V0H0z" />
              </clipPath>
            </defs>
            <g
              clip-path="url(#a)"
              transform="matrix(1 0 0 -1 -362.264 234.099)"
            >
              <path
                fill="#3c1e1e"
                d="M412.072 233.099c-26.953 0-48.808-17.256-48.808-38.555 0-13.681 9.052-25.693 22.646-32.55l-4.6-17.166a1.42 1.42 0 0 1 .353-1.465c.263-.265.614-.411.995-.411.294 0 .586.117.85.322l19.775 13.36a62.109 62.109 0 0 1 8.789-.644c26.953 0 48.81 17.255 48.81 38.554 0 21.299-21.857 38.555-48.81 38.555"
              />
            </g>
          </svg>
          <span>카카오로 로그인</span>
        </button>
      </form>
      <div className="mt-2.5 text-fontGray flex gap-[102px] font-extralight">
        <Link href="/email">이메일 찾기</Link>
        <Link href="/password">비밀번호 찾기</Link>
      </div>
      <p className="text-fontGray font-extralight  mt-[52px]">
        아직 회원이 아니신가요?
        <Link href="/signup" className="text-black font-bold ml-2">
          회원가입
        </Link>
      </p>
    </>
  );
};

export default SignIn;
