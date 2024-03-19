import React, { useState } from 'react'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'

import UserImage05 from '../../images/user-32-05.jpg'
import UserImage07 from '../../images/user-32-07.jpg'
import UserImage08 from '../../images/user-32-08.jpg'

function TasksList() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Smaller container */}
            <div className="max-w-3xl mx-auto">
              {/* Page header */}
              <div className="sm:flex sm:justify-between sm:items-center mb-8">
                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
                    我的任务 ✨
                  </h1>
                </div>

                {/* Right: Actions */}
                <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-4">
                  {/* Avatars */}
                  {/* Add taks button */}
                  <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg
                      className="w-4 h-4 fill-current opacity-50 shrink-0"
                      viewBox="0 0 16 16">
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="ml-2">添加任务</span>
                  </button>
                </div>
              </div>

              {/* Tasks */}
              <div className="space-y-6">
                {/* Group 1 */}
                <div>
                  <h2 className="grow font-semibold text-slate-800 dark:text-slate-100 truncate mb-4">
                    任务列表 🖋️
                  </h2>
                  <div className="space-y-2">
                    {/* Task */}
                    <div
                      className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-4"
                      draggable="true">
                      <div className="sm:flex sm:justify-between sm:items-start">
                        {/* Left side */}
                        <div className="grow mt-0.5 mb-3 sm:mb-0 space-y-3">
                          <div className="flex items-center">
                            {/* Drag button */}
                            <button className="cursor-move mr-2">
                              <span className="sr-only">Drag</span>
                              <svg
                                className="w-3 h-3 fill-slate-300 dark:fill-slate-600"
                                viexbox="0 0 12 12"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M0 1h12v2H0V1Zm0 4h12v2H0V5Zm0 4h12v2H0V9Z"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </button>
                            {/* Checkbox button */}
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                className="form-checkbox w-5 h-5 rounded-full peer"
                              />
                              <span className="font-medium text-slate-800 dark:text-slate-100 peer-checked:line-through ml-2">
                                社工任务：家庭访问记录更新
                              </span>
                            </label>
                          </div>
                        </div>
                        {/* Right side */}
                        <div className="flex items-center justify-end space-x-3">
                          {/* Date */}
                          <div className="flex items-center text-amber-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                            </svg>
                            <div className="text-sm text-amber-600">Mar 3</div>
                          </div>
                          {/* Replies button */}
                          <button className="flex items-center text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                            </svg>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              8
                            </div>
                          </button>
                          {/* Attach button */}
                          <button className="text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0zM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Task */}
                    <div
                      className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-4"
                      draggable="true">
                      <div className="sm:flex sm:justify-between sm:items-start">
                        {/* Left side */}
                        <div className="grow mt-0.5 mb-3 sm:mb-0 space-y-3">
                          <div className="flex items-center">
                            {/* Drag button */}
                            <button className="cursor-move mr-2">
                              <span className="sr-only">Drag</span>
                              <svg
                                className="w-3 h-3 fill-slate-300 dark:fill-slate-600"
                                viexbox="0 0 12 12"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M0 1h12v2H0V1Zm0 4h12v2H0V5Zm0 4h12v2H0V9Z"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </button>
                            {/* Checkbox button */}
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                className="form-checkbox w-5 h-5 rounded-full peer"
                              />
                              <span className="font-medium text-slate-800 dark:text-slate-100 peer-checked:line-through ml-2">
                                社工任务：社区活动组织
                              </span>
                            </label>
                          </div>
                        </div>
                        {/* Right side */}
                        <div className="flex items-center justify-end space-x-3">
                          {/* Date */}
                          <div className="flex items-center text-amber-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                            </svg>
                            <div className="text-sm text-amber-600">Mar 8</div>
                          </div>
                          {/* Replies button */}
                          <button className="flex items-center text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                            </svg>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              3
                            </div>
                          </button>
                          {/* Attach button */}
                          <button className="text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0zM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Task */}
                    <div
                      className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-4"
                      draggable="true">
                      <div className="sm:flex sm:justify-between sm:items-start">
                        {/* Left side */}
                        <div className="grow mt-0.5 mb-3 sm:mb-0 space-y-3">
                          <div className="flex items-center">
                            {/* Drag button */}
                            <button className="cursor-move mr-2">
                              <span className="sr-only">Drag</span>
                              <svg
                                className="w-3 h-3 fill-slate-300 dark:fill-slate-600"
                                viexbox="0 0 12 12"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M0 1h12v2H0V1Zm0 4h12v2H0V5Zm0 4h12v2H0V9Z"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </button>
                            {/* Checkbox button */}
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                className="form-checkbox w-5 h-5 rounded-full peer"
                              />
                              <span className="font-medium text-slate-800 dark:text-slate-100 peer-checked:line-through ml-2">
                                社工任务：案件评估报告制作
                              </span>
                            </label>
                          </div>
                        </div>
                        {/* Right side */}
                        <div className="flex items-center justify-end space-x-3">
                          {/* Date */}
                          <div className="flex items-center text-amber-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                            </svg>
                            <div className="text-sm text-amber-600">Mar 10</div>
                          </div>
                          {/* Replies button */}
                          <button className="flex items-center text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                            </svg>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              1
                            </div>
                          </button>
                          {/* Attach button */}
                          <button className="text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0zM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Task */}
                    <div
                      className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-4"
                      draggable="true">
                      <div className="sm:flex sm:justify-between sm:items-start">
                        {/* Left side */}
                        <div className="grow mt-0.5 mb-3 sm:mb-0 space-y-3">
                          <div className="flex items-center">
                            {/* Drag button */}
                            <button className="cursor-move mr-2">
                              <span className="sr-only">Drag</span>
                              <svg
                                className="w-3 h-3 fill-slate-300 dark:fill-slate-600"
                                viexbox="0 0 12 12"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M0 1h12v2H0V1Zm0 4h12v2H0V5Zm0 4h12v2H0V9Z"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </button>
                            {/* Checkbox button */}
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                className="form-checkbox w-5 h-5 rounded-full peer"
                              />
                              <span className="font-medium text-slate-800 dark:text-slate-100 peer-checked:line-through ml-2">
                                社工任务：志愿者招募与培训
                              </span>
                            </label>
                          </div>
                        </div>
                        {/* Right side */}
                        <div className="flex items-center justify-end space-x-3">
                          {/* Date */}
                          <div className="flex items-center text-amber-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                            </svg>
                            <div className="text-sm text-amber-600">Mar 10</div>
                          </div>
                          {/* Replies button */}
                          <button className="flex items-center text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                            </svg>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              1
                            </div>
                          </button>
                          {/* Attach button */}
                          <button className="text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0zM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Task */}
                    <div
                      className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-4"
                      draggable="true">
                      <div className="sm:flex sm:justify-between sm:items-start">
                        {/* Left side */}
                        <div className="grow mt-0.5 mb-3 sm:mb-0 space-y-3">
                          <div className="flex items-center">
                            {/* Drag button */}
                            <button className="cursor-move mr-2">
                              <span className="sr-only">Drag</span>
                              <svg
                                className="w-3 h-3 fill-slate-300 dark:fill-slate-600"
                                viexbox="0 0 12 12"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M0 1h12v2H0V1Zm0 4h12v2H0V5Zm0 4h12v2H0V9Z"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </button>
                            {/* Checkbox button */}
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                className="form-checkbox w-5 h-5 rounded-full peer"
                              />
                              <span className="font-medium text-slate-800 dark:text-slate-100 peer-checked:line-through ml-2">
                                社工任务：求助案件跟进
                              </span>
                            </label>
                          </div>
                        </div>
                        {/* Right side */}
                        <div className="flex items-center justify-end space-x-3">
                          {/* Date */}
                          <div className="flex items-center text-amber-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                            </svg>
                            <div className="text-sm text-amber-600">Mar 10</div>
                          </div>
                          {/* Replies button */}
                          <button className="flex items-center text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                            </svg>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              1
                            </div>
                          </button>
                          {/* Attach button */}
                          <button className="text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0zM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Task */}
                    <div
                      className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-4"
                      draggable="true">
                      <div className="sm:flex sm:justify-between sm:items-start">
                        {/* Left side */}
                        <div className="grow mt-0.5 mb-3 sm:mb-0 space-y-3">
                          <div className="flex items-center">
                            {/* Drag button */}
                            <button className="cursor-move mr-2">
                              <span className="sr-only">Drag</span>
                              <svg
                                className="w-3 h-3 fill-slate-300 dark:fill-slate-600"
                                viexbox="0 0 12 12"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M0 1h12v2H0V1Zm0 4h12v2H0V5Zm0 4h12v2H0V9Z"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </button>
                            {/* Checkbox button */}
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                className="form-checkbox w-5 h-5 rounded-full peer"
                              />
                              <span className="font-medium text-slate-800 dark:text-slate-100 peer-checked:line-through ml-2">
                                社工任务：资源目录更新
                              </span>
                            </label>
                          </div>
                        </div>
                        {/* Right side */}
                        <div className="flex items-center justify-end space-x-3">
                          {/* Date */}
                          <div className="flex items-center text-amber-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                            </svg>
                            <div className="text-sm text-amber-600">Mar 10</div>
                          </div>
                          {/* Replies button */}
                          <button className="flex items-center text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                            </svg>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              1
                            </div>
                          </button>
                          {/* Attach button */}
                          <button className="text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500">
                            <svg
                              className="w-4 h-4 shrink-0 fill-current mr-1.5"
                              viewBox="0 0 16 16">
                              <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0zM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default TasksList
