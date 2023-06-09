import type { NextPage } from 'next';
import FormInput from '@/components/FormInput/FormInput';
import Button from '@/components/Button/Button';

const SignUp: NextPage = () => {
  return (
    <>
      <h1 className="heading1">회원가입</h1>
      <form className="flex flex-col gap-3.5 py-[55px]">
        <div>
          <FormInput id="email" type="email" labelText="이메일" />
          <span className="signup-guide">이메일 형식을 지켜주세요.</span>
        </div>
        <div>
          <FormInput id="password" type="password" labelText="비밀번호" />
          <span className="signup-guide">
            비밀번호는 대소문자, 숫자, 특수문자가 포함되어야 합니다.
          </span>
        </div>
        <div>
          <FormInput
            id="password-confirm"
            type="password"
            labelText="비밀번호 확인"
          />
          <span className="signup-guide">비밀번호가 일치하지 않습니다.</span>
        </div>
        <div>
          <FormInput id="nickname" type="text" labelText="닉네임" />
          <span className="signup-guide">닉네임을 입력해주세요.</span>
        </div>
        <Button text="가입하기" classProp="mt-[26px]" />
      </form>
    </>
  );
};

export default SignUp;
