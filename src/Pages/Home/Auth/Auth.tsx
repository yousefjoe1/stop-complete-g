import { useState } from "react";

import { motion } from "framer-motion";

import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";

const Auth = () => {

  const [isLogin, setIsLogin] = useState(false);

  // useEffect(() => {
  //   setIsLogin(!isLogin);
  // }, [mode]);
  
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl"
      >
        
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <motion.button
              onClick={() => toggleAuthMode()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-medium underline underline-offset-2 text-base text-blue-600 hover:text-gray-500 transition duration-300 ease-in-out"
            >
              {isLogin ? "معندكش حساب ? طب سجل من هنا"
                : "عندك حساب? طب روح هنا"}
            </motion.button>
          </div>
          {/* {mode == 'login' && (
            <div className="text-sm">
              <motion.button
                onClick={() => toggleAuthMode("forgot-password")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-medium text-gray-600 hover:text-gray-500 transition duration-300 ease-in-out"
              >
                Forgot your password?
              </motion.button>
            </div>
          )} */}
        </div>
        {isLogin && <UserLogin />}
        {!isLogin  && <UserRegister />}
      </motion.div>
    </section>
  );
};

export default Auth;
