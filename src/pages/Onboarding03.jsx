import React from 'react'
import { Link } from 'react-router-dom'

import OnboardingImage from '../images/onboarding-image.jpg'
import OnboardingDecoration from '../images/auth-decoration.png'

function Onboarding03() {
  return (
    <main className="bg-white dark:bg-slate-900">
      <div className="relative flex">
        {/* Content */}
        <div className="w-full md:w-1/2">
          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                <div className="text-sm">
                  已有账号？{' '}
                  <Link
                    className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                    to="/signin">
                    登录
                  </Link>
                </div>
              </div>

              {/* Progress bar */}
              <div className="px-4 pt-12 pb-8">
                <div className="max-w-md mx-auto w-full">
                  <div className="relative">
                    <div
                      className="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200 dark:bg-slate-700"
                      aria-hidden="true"></div>
                    <ul className="relative flex justify-between w-full">
                      <li>
                        <Link
                          className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white"
                          to="/onboarding-01">
                          1
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white"
                          to="/onboarding-02">
                          2
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white"
                          to="/onboarding-03">
                          3
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                          to="/onboarding-04">
                          4
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-8">
              <div className="max-w-md mx-auto">
                <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">
                  详细的个人信息 ✨
                </h1>
                {/* htmlForm */}
                <form>
                  <div className="space-y-4 mb-8">
                    {/* Company Name */}
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="company-name">
                        组织名称 <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="company-name"
                        className="form-input w-full"
                        type="text"
                      />
                    </div>
                    {/* City and Postal Code */}
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="city">
                          城市 <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="city"
                          className="form-input w-full"
                          type="text"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="postal-code">
                          邮编 <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="postal-code"
                          className="form-input w-full"
                          type="text"
                        />
                      </div>
                    </div>
                    {/* Street Address */}
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="street">
                        街道 <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="street"
                        className="form-input w-full"
                        type="text"
                      />
                    </div>
                    {/* Country */}
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="country">
                        身份 <span className="text-rose-500">*</span>
                      </label>
                      <select id="country" className="form-select w-full">
                        <option>游客</option>
                        <option>社工个人</option>
                        <option>社工机构</option>
                        <option>政府管理人员</option>
                        <option>监护人</option>
                        <option>学校教师</option>
                        <option>行政人员</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      className="text-sm underline hover:no-underline"
                      to="/onboarding-02">
                      &lt;- 返回
                    </Link>
                    <Link
                      className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto"
                      to="/onboarding-04">
                      下一步 -&gt;
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
          aria-hidden="true">
          <img
            className="object-cover object-center w-full h-full"
            src={OnboardingImage}
            width="760"
            height="1024"
            alt="Onboarding"
          />
          <img
            className="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block"
            src={OnboardingDecoration}
            width="218"
            height="224"
            alt="Authentication decoration"
          />
        </div>
      </div>
    </main>
  )
}

export default Onboarding03
