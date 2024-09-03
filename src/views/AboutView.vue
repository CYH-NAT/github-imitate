<template>
    <div class="text-sm text-gray-900">
        <nav class="flex items-center px-4 py-3 bg-gray-900 justify-between">
            <div class="text-white flex items-center gap-4">
                <a href="#">
                    <svg class="w-6 fill-current hover:text-gray-200" aria-hidden="true" viewBox="0 0 24 24"
                        version="1.1" data-view-component="true">
                        <path
                            d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z">
                        </path>
                    </svg>
                </a>
                <div class="relative">
                    <input type="text"
                        class="rounded bg-gray-900 border border-gray-600 placeholder-gray-400 w-72 px-3 py-1"
                        placeholder="search or jump to ....">
                    <div class="absolute top-0 right-0 flex items-center h-full">
                        <div class="border border-gray-600 rounded text-xs text-gray-400 px-2 mr-2">
                            /
                        </div>
                    </div>
                </div>
                <ul class="hidden lg:flex items-center font-semibold gap-4">
                    <li>
                        <a href="" class="hover:text-gray-400">Pull requests</a>
                    </li>
                    <li>
                        <a href="" class="hover:text-gray-400">Issues requests</a>
                    </li>
                    <li>
                        <a href="" class="hover:text-gray-400">Marketplace</a>
                    </li>
                    <li>
                        <a href="" class="hover:text-gray-400">Explore</a>
                    </li>
                </ul>
            </div>
            <div class="flex text-white items-center gap-4">
                <a href="#" class="hidden lg:block relative text-gray-400">
                    <svg class="w-5 fill-current hover:text-gray-200" aria-hidden="true" viewBox="0 0 16 16"
                        version="1.1" data-view-component="true">
                        <path
                            d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z">
                        </path>
                    </svg>
                    <div class="bg-blue-400 rounded-full size-2 absolute top-0 right-0"></div>
                </a>
                <a href="#" class="hidden lg:flex items-center hover:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </a>
                <a href="#" class="flex items-center hover:text-gray-400">
                    <div class="size-6 rounded-full bg-blue-600"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </a>
            </div>
        </nav>
        <div class="repo-stats bg-gray-100 flex flex-col items-start lg:flex-row lg:items-center lg:justify-between px-4 py-4 gap-4">
            <div class="flex items-center gap-2">
                <svg class="size-4 fill-current text-gray-600" aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                    data-view-component="true">
                    <path
                        d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z">
                    </path>
                </svg>
                <div class="flex items-center text-xl">
                    <a href="#" class="text-blue-600 hover:underline">tailwindlab</a>
                    <span class="mx-1">/</span>
                    <a href="" class="text-blue-600 hover:underline font-semibold">tailwind</a>
                </div>
                <div class="rounded-xl bg-gray-100 border border-gray-300 text-gray-600 text-xs self-start px-1">
                    Public
                </div>
            </div>
            <div class="flex gap-2 items-center">
                <div class="flex text-xs shadow-sm">
                    <button class="border border-gray-300 rounded-lg rounded-r-none px-3 py-1 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span class="font-semibold">Watch</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <a href="#"
                        class="flex items-center border border-gray-300 rounded-lg rounded-l-none px-3 py-1 border-l-0 font-semibold hover:text-blue-400 bg-white">548</a>
                </div>
                <div class="flex text-xs shadow-sm">
                    <button class="border border-gray-300 rounded-lg rounded-r-none px-3 py-1 flex items-center gap-2">
                        <svg class="size-4" aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                            data-view-component="true">
                            <path
                                d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z">
                            </path>
                        </svg>
                        <span class="font-semibold">Star</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <a href="#"
                        class="flex items-center border border-gray-300 rounded-lg rounded-l-none px-3 py-1 border-l-0 font-semibold hover:text-blue-400 bg-white">47.8k</a>
                </div>
                <div class="flex text-xs shadow-sm">
                    <button class="border border-gray-300 rounded-lg rounded-r-none px-3 py-1 flex items-center gap-2">
                        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                            class="size-4">
                            <path
                                d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z">
                            </path>
                        </svg>
                        <span class="font-semibold">Fork</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <a href="#"
                        class="flex items-center border border-gray-300 rounded-lg rounded-l-none px-3 py-1 border-l-0 font-semibold hover:text-blue-400 bg-white">2.2k</a>
                </div>
            </div>
        </div>
        <ul class="repo-nav bg-gray-100 border-b border-gray-300 flex items-center px-4 pt-4">
            <li class="font-semibold">
                <a href="#"
                    class="flex items-center border-b-2 border-red-500 px-4 pb-3 text-gray-700 hover:border-gray-300">
                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                        class="size-4 fill-current">
                        <path
                            d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z">
                        </path>
                    </svg>
                    <span class="ml-2">Code</span>
                </a>
            </li>
            <li class="font-semibold">
                <a href="#" class="flex items-center px-4 pb-3 text-gray-700 hover:border-gray-300 border-b">
                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                        class="size-4 fill-current">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z">
                        </path>
                    </svg>
                    <span class="ml-2">Issues</span>
                    <div class="flex items-center bg-gray-200 rounded-lg px-2 ml-2">38</div>
                </a>
            </li>
            <li class="font-semibold">
                <a href="#" class="flex items-center px-4 pb-3 text-gray-700 hover:border-gray-300 border-b">
                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                        class="size-4 fill-current">
                        <path
                            d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z">
                        </path>
                    </svg>
                    <span class="ml-2">Pull requests</span>
                    <div class="flex items-center bg-gray-200 rounded-lg px-2 ml-2">18</div>
                </a>
            </li>
            <li class="font-semibold">
                <a href="#" class="flex items-center px-4 pb-3 text-gray-700 hover:border-gray-300 border-b">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                    <span class="ml-2">Discussions</span>
                </a>
            </li>
            <li class="font-semibold hidden lg:block">
                <a href="#" class="flex items-center px-4 pb-3 text-gray-700 hover:border-gray-300 border-b">
                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                        class="size-4 fill-current">
                        <path
                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z">
                        </path>
                    </svg>
                    <span class="ml-2">Actions</span>
                </a>
            </li>
            <li class="font-semibold hidden lg:block">
                <a href="#" class="flex items-center px-4 pb-3 text-gray-700 hover:border-gray-300 border-b">
                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                        class="size-4 fill-current">
                        <path
                            d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z">
                        </path>
                    </svg>
                    <span class="ml-2">Security</span>
                </a>
            </li>
            <li class="font-semibold hidden lg:block">
                <a href="#" class="flex items-center px-4 pb-3 text-gray-700 hover:border-gray-300 border-b">
                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                        class="size-4 fill-current">
                        <path
                            d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z">
                        </path>
                    </svg>
                    <span class="ml-2">Insights</span>
                </a>
            </li>
        </ul>
        <!-- head end -->
        <div class="container mx-auto my-8 px-4 flex flex-col lg:flex-row">
            <div class="file-explorer-containter w-full lg:w-3/4 mr-8">
                <div class="brach-havigation flex items-center justify-between">
                    <div class="flex items-center gap-1">
                        <button
                            class="border border-gray-300 bg-gray-100 rounded-md px-4 py-1 hover:bg-gray-200 flex items-center gap-2">
                            <svg aria-hidden="true" focusable="false" role="img" class="size-4" viewBox="0 0 16 16"
                                fill="currentColor"
                                style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible">
                                <path
                                    d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z">
                                </path>
                            </svg>
                            <span>master</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <a href="#" class="px-4 py-1 hover:text-blue-400 flex items-center gap-1">
                            <svg aria-hidden="true" focusable="false" role="img" class="size-4" viewBox="0 0 16 16"
                                fill="currentColor"
                                style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible">
                                <path
                                    d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z">
                                </path>
                            </svg>
                            <span>45 braches</span>
                        </a>
                        <a href="#" class="px-4 py-1 hover:text-blue-400 flex items-center gap-1">
                            <svg aria-hidden="true" focusable="false" role="img" class="size-4" viewBox="0 0 16 16"
                                fill="currentColor"
                                style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible">
                                <path
                                    d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z">
                                </path>
                            </svg>
                            <span>45 Tags</span>
                        </a>
                    </div>
                    <div class="hidden lg:flex items-center gap-1">
                        <button
                            class="border border-gray-300 bg-gray-100 rounded-md px-4 py-1 hover:bg-gray-200 flex items-center gap-2">
                            <span>Go to file</span>
                        </button>
                        <button
                            class="border border-gray-300 bg-gray-100 rounded-md px-4 py-1 hover:bg-gray-200 flex items-center gap-2">
                            <span>Add file</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            class="border border-green-300 bg-green-600 rounded-md px-4 py-1 hover:bg-green-700 text-white flex items-center gap-2">
                            <span>Code</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    class="commits-container bg-gray-100 rounded-b-none border-gray-300 border-b-0 flex items-center justify-between p-4 mt-5">
                    <div class="flex items-center gap-2">
                        <div class="size-6 rounded-full bg-blue-500"></div>
                        <a href="" class="font-semibold hover:underline">adanwathan</a>
                        <a href="" class="font-semibold hover:underline hover:text-blue-500">Don't use pointer cursor on
                            disabled button <span class="text-blue-500">[#5772]</span></a>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4 text-green-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <a href="#" class="hover:underline hover:text-blue-600 text-gray-600">a7c89c8</a>
                        <a href="#" class="hover:underline hover:text-blue-600 text-gray-600">yesterday</a>
                        <div class="hidden lg:flex items-center gap-1 hover:text-blue-600 cursor-pointer ml-3">
                            <svg aria-hidden="true" focusable="false" role="img" class="size-4" viewBox="0 0 16 16"
                                fill="currentColor"
                                style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible">
                                <path
                                    d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z">
                                </path>
                            </svg>
                            <span class="font-semibold">4,246</span>
                            <span>comments</span>
                        </div>
                    </div>
                </div>
                <div
                    class="file-explorer-body rounded-md rounded-t-none border border-gray-300 divide-y divide-gray-300">
                    <div class="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                        <div class="w-4/12 flex items-center">
                            <svg aria-hidden="true" focusable="false" role="img" class="size-4 fill-blue-400"
                                viewBox="0 0 16 16"
                                style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;">
                                <path
                                    d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z">
                                </path>
                            </svg>
                            <a href="#" class="hover:underline hover:text-blue-600 ml-3">.github</a>
                        </div>
                        <div class="w-6/12 truncate">
                            <a href="#" class="hover:underline hover:text-blue-600 ml-3">Update release.yml</a>
                        </div>
                        <div class="w-2/12 text-right">
                            <span class="text-gray-600 ">13days ago</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                        <div class="w-4/12 flex items-center">
                            <svg aria-hidden="true" focusable="false" role="img" class="size-4 fill-blue-400"
                                viewBox="0 0 16 16"
                                style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;">
                                <path
                                    d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z">
                                </path>
                            </svg>
                            <a href="#" class="hover:underline hover:text-blue-600 ml-3">.github</a>
                        </div>
                        <div class="w-6/12">
                            <a href="#" class="hover:underline hover:text-blue-600 ml-3">Update release.yml</a>
                        </div>
                        <div class="w-2/12 text-right">
                            <span class="text-gray-600 ">13days ago</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                        <div class="w-4/12 flex items-center">
                            <svg aria-hidden="true" focusable="false" role="img" class="size-4 fill-blue-400"
                                viewBox="0 0 16 16"
                                style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;">
                                <path
                                    d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z">
                                </path>
                            </svg>
                            <a href="#" class="hover:underline hover:text-blue-600 ml-3">.github</a>
                        </div>
                        <div class="w-6/12">
                            <a href="#" class="hover:underline hover:text-blue-600 ml-3">Update release.yml</a>
                        </div>
                        <div class="w-2/12 text-right">
                            <span class="text-gray-600 ">13days ago</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- file explorer end -->
            <div class="sidebar w-full mt-4 lg:w-1/4 lg:mt-0 divide-y divide-gray-300">
                <div class="about">
                    <h4 class="font-semibold">About</h4>
                    <p class="mt-4">A utility-first CSS framework for rapid UI development.</p>
                    <div class="flex items-center gap-2 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                        <a href="#" class="text-blue-600 hover:underline font-semibold">tailwindcss.com</a>
                    </div>
                    <div class="tags text-xs font-semibold flex flex-wrap items-center mt-2">
                        <a href="#"
                            class="bg-blue-100 hover:bg-blue-800 hover:text-white text-blue-600 rounded-2xl px-2 py-1 mt-2 mr-2">css</a>
                        <a href="#"
                            class="bg-blue-100 hover:bg-blue-800 hover:text-white text-blue-600 rounded-2xl px-2 py-1 mt-2 mr-2">postcss</a>
                        <a href="#"
                            class="bg-blue-100 hover:bg-blue-800 hover:text-white text-blue-600 rounded-2xl px-2 py-1 mt-2 mr-2">responsive</a>
                        <a href="#"
                            class="bg-blue-100 hover:bg-blue-800 hover:text-white text-blue-600 rounded-2xl px-2 py-1 mt-2 mr-2">css-framwork</a>
                        <a href="#"
                            class="bg-blue-100 hover:bg-blue-800 hover:text-white text-blue-600 rounded-2xl px-2 py-1 mt-2 mr-2">utility
                            classes</a>
                        <a href="#"
                            class="bg-blue-100 hover:bg-blue-800 hover:text-white text-blue-600 rounded-2xl px-2 py-1 mt-2 mr-2">tailwindcss</a>
                    </div>
                    <!-- tags end -->
                    <a href="" class="flex items-center gap-2 mt-4 group">
                        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                            class="size-4 fill-current group-hover:text-blue-600">
                            <path
                                d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z">
                            </path>
                        </svg>
                        <span class="group-hover:text-blue-600">Readme</span>
                    </a>
                    <a href="" class="flex items-center gap-2 mt-4 group">
                        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                            class="size-4 fill-current group-hover:text-blue-600">
                            <path
                                d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z">
                            </path>
                        </svg>
                        <span class="group-hover:text-blue-600">MIT license</span>
                    </a>
                </div>
                <!-- about end -->
                <div class="release mt-6 pt-6">
                    <h4 class="font-semibold flex items-center">
                        <span>Release</span>
                        <div class="text-xs rounde-lg bg-gray-100 text-gray-800 px-2 ml-1 rounded-lg">163</div>
                    </h4>
                    <a href="#" class="flex items-start group gap-2 mt-4">
                        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                            class="mt-1 size-4 text-green-500 fill-current group-hover:text-blue-500">
                            <path
                                d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z">
                            </path>
                        </svg>
                        <div>
                            <span class="font-semibold group-hover:text-blue-600">v2.2.6</span>
                            <span
                                class="text-xs border border-green-500 rounded-lg text-green-600 font-semibold px-2 ml-2">latest</span>
                            <div class="text-xs group-hover:text-blue-600">16 days ago</div>
                        </div>
                        <div class="mt-4">
                            <a href="" class="text-blue-600 hover:underline">+ 162 release</a>
                        </div>
                    </a>
                </div>
                <!-- Release end -->
                <div class="packages mt-6 pt-6">
                    <h4 class="font-semibold flex items-center">
                        Packages
                    </h4>
                    <p class="mt-6 text-xs text-gray-600">No packages published</p>
                </div>
                <!-- pakages end -->
                <div class="used-by mt-6 pt-6">
                    <h4 class="font-semibold flex items-center">
                        Used by
                        <div class="text-xs rounde-lg bg-gray-100 text-gray-800 px-2 ml-1 rounded-lg">320k</div>
                    </h4>
                    <div class="users flex items-center mt-4">
                        <a href="" class="flex items-center group -space-x-2">
                            <div class="size-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            <div class="size-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            <div class="size-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            <div class="size-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            <div class="size-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            <div class="size-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            <div class="size-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            <div class="size-7 rounded-full bg-blue-500 border-2 border-white"></div>
                        </a>
                        <span class="text-xs font-semibold text-blue-500 group-hover:underline ml-2">+ 322,331</span>
                    </div>
                </div>
                <!-- UsedBy end -->
                <div class="contributer mt-6 pt-6">
                    <h4 class="font-semibold flex items-center">
                        Contributer
                        <div class="text-xs rounde-lg bg-gray-100 text-gray-800 px-2 ml-1 rounded-lg">202</div>
                    </h4>
                    <div class="flex flex-wrap items-center mt-4">
                        <a href="#" class="size-7 rounded-full bg-blue-500 border-2 border-white"></a>
                        <a href="#" class="size-7 rounded-full bg-blue-500 border-2 border-white"></a>
                        <a href="#" class="size-7 rounded-full bg-blue-500 border-2 border-white"></a>
                        <a href="#" class="size-7 rounded-full bg-blue-500 border-2 border-white"></a>
                        <a href="#" class="size-7 rounded-full bg-blue-500 border-2 border-white"></a>
                        <a href="#" class="size-7 rounded-full bg-blue-500 border-2 border-white"></a>
                        <a href="#" class="size-7 rounded-full bg-blue-500 border-2 border-white"></a>
                        <a href="#" class="size-7 rounded-full bg-blue-500 border-2 border-white"></a>
                    </div>
                    <p class="text-xs font-semibold text-blue-500 group-hover:underline mt-2">+ 191 contributer</p>
                </div>
                <!-- contributer end -->
                <div class="language mt-6 pt-6">
                    <h4 class="font-semibold flex items-center">
                        Languages

                    </h4>
                    <div class="flex items-center mt-4">
                        <div class="w-8/12 h-2 rounded-md rounded-r-none bg-yellow-400"></div>
                        <div class="w-3/12 h-2 border-white border-l bg-purple-400"></div>
                        <div class="w-1/12 h-2 rounded-md rounded-l-none border-white border-l bg-red-400"></div>
                    </div>
                    <ul class="mt-2 flex flex-wrap gap-x-3 gap-y-1 items-center text-xs">
                        <li class="flex items-center gap-2">
                            <div class=" size-2 rounded-full bg-yellow-400"></div>
                            <div class="cursor-pointer group flex gap-1">
                                <span class="group-hover:text-blue-600 font-semibold">JavaScripts</span>
                                <span class="group-hover:text-blue-600">76.8%</span>
                            </div>
                        </li>
                        <li class="flex items-center gap-2">
                            <div class=" size-2 rounded-full bg-purple-400"></div>
                            <div class="cursor-pointer group flex gap-1">
                                <span class="group-hover:text-blue-600 font-semibold">CSS</span>
                                <span class="group-hover:text-blue-600">16.9%</span>
                            </div>
                        </li>
                        <li class="flex items-center gap-2">
                            <div class=" size-2 rounded-full bg-red-400"></div>
                            <div class="cursor-pointer group flex gap-1">
                                <span class="group-hover:text-blue-600 font-semibold">HTML</span>
                                <span class="group-hover:text-blue-600">6.2%</span>
                            </div>
                        </li>
                        <li class="flex items-center gap-2">
                            <div class=" size-2 rounded-full bg-gray-300"></div>
                            <div class="cursor-pointer group flex gap-1">
                                <span class="group-hover:text-blue-600 font-semibold">others</span>
                                <span class="group-hover:text-blue-600">0.1%</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- language end -->
            </div>

            <!-- sidebar end -->
        </div>
        <footer class="container mx-auto text-xs border-t border-gray-300 py-10 flex flex-col items-start lg:flex-row lg:items-center justify-between gap-2">
            <ul class="flex items-center gap-12">
                <div class="order-1 lg:-order-1">&copy; github,Inc.</div>
                <li>
                    <a href="" class="text-blue-600 hover:underline">Terms</a>
                </li>
                <li>
                    <a href="" class="text-blue-600 hover:underline">Privacy</a>
                </li>
                <li>
                    <a href="" class="text-blue-600 hover:underline">Security</a>
                </li>
                <li>
                    <a href="" class="text-blue-600 hover:underline">Status</a>
                </li>
            </ul>
            <svg class="hidden lg:inline-block w-6 fill-current text-gray-400 hover:text-gray-600" aria-hidden="true" viewBox="0 0 24 24"
                version="1.1" data-view-component="true">
                <path
                    d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z">
                </path>
            </svg>
            <ul class="flex items-center gap-12">
                <li>
                    <a href="" class="text-blue-600 hover:underline">Contact Github</a>
                </li>
                <li>
                    <a href="" class="text-blue-600 hover:underline">Pricing</a>
                </li>
                <li>
                    <a href="" class="text-blue-600 hover:underline">Api</a>
                </li>
                <li>
                    <a href="" class="text-blue-600 hover:underline">Training</a>
                </li>
                <li>
                    <a href="" class="text-blue-600 hover:underline">Blog</a>
                </li>
                <li>
                    <a href="" class="text-blue-600 hover:underline">About</a>
                </li>
            </ul>
        </footer>
    </div>
</template>

