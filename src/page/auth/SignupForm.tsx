import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define the form input types
type ISignupForm = {
    email: string;
    password: string;
    phone: string;
    fullname: string;
    dob: string;
    gender: string;
    isOver18: boolean;
    isSubscribed: boolean;

}
// Define the validation schema using yup
const signupSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email không hợp lệ")
        .required("Vui lòng điền email"),
    password: yup
        .string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .required("Vui lòng điền mật khẩu"),
    phone: yup
        .string()
        .min(10, "Số điện thoại không hợp lệ")
        .required("Vui lòng điền số điện thoại"),
    fullname: yup
        .string()
        .min(2, "Họ và tên ít nhất 2 từ")
        .required("Vui lòng điền họ và tên"),
    dob: yup
        .string()
        .required("Vui lòng điền ngày tháng năm sinh"),
    gender: yup
        .string()

});


const SignUpForm = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISignupForm>({
        resolver: yupResolver(signupSchema),
        defaultValues: {
            email: "",
            password: "",
            phone: "",
            fullname: "",
            dob: "",
            gender: "2",
            isOver18: false,
            isSubscribed: false
        },
    });
    const onSubmit = (data: ISignupForm) => {
        console.log(data);
    }
    const handleLogin = () => {
        navigate("/login");
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="card card-xl w-[440px] mt-10 mx-auto md:shadow-lg rounded-xl bg-white p-6">

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-4">
                    <div className="text-xl font-bold mb-5">
                        Đăng Ký Tài Khoản
                    </div>
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
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900"> Số điện thoại <span className="text-red-500">*</span></label>
                        <div className="mt-2">
                            <input
                                type="phone" {...register("phone")}
                                placeholder="Nhập số điện thoại"
                                className={`block w-full h-[40px] rounded-md border 
                                ${errors.phone ? "border-red-500" : "border-input"} 
                                bg-white px-3 py-1.5 text-base text-gray-900 
                                placeholder:text-gray-400 sm:text-sm/6 focus:outline-none`} />
                            {errors.phone && <span className="text-red-500 text-sm mt-1 block">{errors.phone.message}</span>}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900"> Họ và tên <span className="text-red-500">*</span></label>
                        <div className="mt-2">
                            <input
                                type="fullname" {...register("fullname")}
                                placeholder="Nhập đầy đủ họ và tên"
                                className={`block w-full h-[40px] rounded-md border 
                                ${errors.fullname ? "border-red-500" : "border-input"} 
                                bg-white px-3 py-1.5 text-base text-gray-900 
                                placeholder:text-gray-400 sm:text-sm/6 focus:outline-none`} />
                            {errors.fullname && <span className="text-red-500 text-sm mt-1 block">{errors.fullname.message}</span>}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900"> Ngày sinh <span className="text-red-500">*</span></label>
                        <div className="mt-2">
                            <input
                                type="date" {...register("dob")}
                                className={`block w-full h-[40px] rounded-md border 
                                ${errors.dob ? "border-red-500" : "border-input"} 
                                bg-white px-3 py-1.5 text-base text-gray-900 
                                placeholder:text-gray-400 sm:text-sm/6 focus:outline-none`} />
                            {errors.dob && <span className="text-red-500 text-sm mt-1 block">{errors.dob.message}</span>}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900"> Giới tính <span className="text-red-500">*</span></label>
                        <div className="mt-2">
                            <select {...register("gender")}
                                className={`block w-full h-[40px] rounded-md border 
                                ${errors.gender ? "border-red-500" : "border-input"} 
                                bg-white px-3 py-1.5 text-base text-gray-900 
                                placeholder:text-gray-400 sm:text-sm/6 focus:outline-none`} >
                                <option value="2">Khác</option>
                                <option value="1">Nam</option>
                                <option value="0">Nữ</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-content text-[13px]">
                        <input type="checkbox" {...register("isOver18")} className="h-[20px] w-[20px] mr-5" />
                        Đăng ký nhận thông tin (Tùy chọn)
                    </div>
                    <div className="flex justify-content text-[13px]">
                        <input type="checkbox" {...register("isSubscribed")} className="h-[20px] w-[20px] mr-5" />
                        Tôi trên 16 tuổi và đồng ý với Điều khoản và Điền kiện
                    </div>
                    <div className=" text-[11px]">
                        Bằng việc tiếp tục đăng ký, tôi xác nhận rằng tôi đã đọc và đồng ý với Điều khoản sử dụng và Chính sách bảo mật của MUJI, trong đó quy định cách MUJI thu thập, sử dụng và tiết lộ dữ liệu cá nhân của tôi cũng như các quyền mà tôi có theo luật hiện hành.
                    </div>
                    <div className="mt-5 mb-5">
                        <button type="submit"
                            className="flex w-full h-[56px] items-center justify-center rounded-md bg-brand-darkRed px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#8c1932] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#8c1932]">Tạo tài khoản mới
                        </button>
                    </div>
                    <hr className="mt-1 border-t border-gray-300" />
                    <div>
                        <div className = "font-bold mt-3 mb-5">Đã có tài khoản</div>
                        <button onClick={handleLogin}
                            className="flex w-full h-[56px] items-center justify-center rounded-md border border-brand-darkRed bg-white px-3 py-1.5 text-sm/6 font-semibold text-brand-darkRed shadow-xs hover:bg-brand-darkRed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-[#8c1932] hover:text-white">
                            Đăng nhập ngay
                        </button>
                    </div>

                </form>
            </div>

        </div>

    );

}

export default SignUpForm;