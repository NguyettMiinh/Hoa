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
  const onSubmit = (data : LoginFormInputs) => {
    console.log(data);
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="card card-xl mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:shadow-lg rounded-xl bg-white p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                placeholder:text-gray-400 sm:text-sm/6 focus:outline-none`}  />
              {errors.password && <span className="text-red-500 text-sm mt-1 block">{errors.password.message}</span>}
            </div>
          </div>
          <div className="mt-5">
            <button type="submit"
              className="flex w-full h-[56px] items-center justify-center rounded-md bg-brand-darkRed px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#8c1932] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#8c1932]">Đăng nhập</button>
          </div>

        </form>
      </div>

    </div>

  );
}

export default LoginForm;