import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define the form input types
type LoginFormInputs = {
  email: string;
  password: string;
}
// Define the validation schema using yup
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng điền email"),
  password: yup
    .string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng điền mật khẩu"),
});


const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  }
  const handleRegister = () => {
    navigate("/register");
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="card card-xl mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:shadow-lg rounded-xl bg-white p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-4">
          <div>
            <label className="block text-sm/6 font-medium text-gray-900">Email <span className="text-red-500">*</span> </label>
            <div className="mt-2">
              <input
                type="email" {...register("email")}
                placeholder="Nhập địa chỉ email"
                className={`block w-full h-[40px] rounded-md border 
                ${errors.email ? "border-red-500" : "border-input"} 
                bg-white px-3 py-1.5 text-base text-gray-900 
                placeholder:text-gray-400 sm:text-sm/6 focus:outline-none`} />
              {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>}
            </div>
          </div>
          <div>
            <label className="block text-sm/6 font-medium text-gray-900">Mật Khẩu <span className="text-red-500">*</span></label>
            <div className="mt-2">
              <input
                type="password" {...register("password")}
                placeholder="Nhập mật khẩu"
                className={`block w-full h-[40px] rounded-md border 
                ${errors.password ? "border-red-500" : "border-input"} 
                bg-white px-3 py-1.5 text-base text-gray-900 
                placeholder:text-gray-400 sm:text-sm/6 focus:outline-none`} />
              {errors.password && <span className="text-red-500 text-sm mt-1 block">{errors.password.message}</span>}
            </div>
          </div>
          <div className="mt-5 mb-5">
            <button type="submit"
              className="flex w-full h-[56px] items-center justify-center rounded-md bg-brand-darkRed px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#8c1932] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#8c1932]">Đăng nhập</button>
          </div>

          <div className=" text-center mb-5">
            <Link to="/forgot-password" className="underline font-bold hover:no-underline">Quên Mật Khẩu?</Link>
          </div>
          <hr className="my-4 border-t border-gray-300" />
          <div className="flex flex-col gap-6">
            <div className="font-bold text-[15px]">Thành viên mới tại YuBi?</div>
            <div className="text-brand-customGray text-[13px]">
              Hãy tham gia cùng chúng tôi để nhận được thông báo về ưu đãi mới và mã giảm giá hấp dẫn.
            </div>
            <button onClick={handleRegister}
              className="flex w-full h-[56px] items-center justify-center rounded-md border border-brand-darkRed bg-white px-3 py-1.5 text-sm/6 font-semibold text-brand-darkRed shadow-xs hover:bg-brand-darkRed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#8c1932] hover:text-white">
              Đăng kí thành viên mới
            </button>
          </div>

        </form>
      </div>

    </div>

  );
}

export default LoginForm;