(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/web/src/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LoginForm() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "ba6d2e6609905ca4f60e336a2232ba590b9d599a1bb17b847517ba3d5fa0985b") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ba6d2e6609905ca4f60e336a2232ba590b9d599a1bb17b847517ba3d5fa0985b";
    }
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== email || $[2] !== password) {
        t0 = ({
            "LoginForm[handleSubmit]": (e)=>{
                e.preventDefault();
                setIsLoading(true);
                const credentials = {
                    email,
                    password
                };
                setTimeout({
                    "LoginForm[handleSubmit > setTimeout()]": ()=>{
                        console.log(credentials);
                        setIsLoading(false);
                    }
                }["LoginForm[handleSubmit > setTimeout()]"], 1500);
            }
        })["LoginForm[handleSubmit]"];
        $[1] = email;
        $[2] = password;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const handleSubmit = t0;
    const handleGoogleSignIn = _LoginFormHandleGoogleSignIn;
    const isValid = email && password;
    let t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            className: "font-lora font-medium text-[32px] text-neutral-950",
            children: "Login"
        }, void 0, false, {
            fileName: "[project]/web/src/app/login/page.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-light text-neutral-700 text-center mb-6",
            children: "Access your dashboard to manage products, track inventory, and monitor orders."
        }, void 0, false, {
            fileName: "[project]/web/src/app/login/page.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center gap-3",
            children: [
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "w-full border border-gray-300 flex items-center justify-center gap-4 p-4 rounded-md hover:bg-neutral-50 transition",
                    onClick: handleGoogleSignIn,
                    "aria-label": "Login with Google",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/google-icon-image.png",
                            alt: "Google login",
                            width: 20,
                            height: 20
                        }, void 0, false, {
                            fileName: "[project]/web/src/app/login/page.tsx",
                            lineNumber: 58,
                            columnNumber: 292
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-neutral-900",
                            children: "Continue with Google"
                        }, void 0, false, {
                            fileName: "[project]/web/src/app/login/page.tsx",
                            lineNumber: 58,
                            columnNumber: 372
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/web/src/app/login/page.tsx",
                    lineNumber: 58,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/web/src/app/login/page.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full my-10 relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "border-[0.5px] border-gray-300"
                }, void 0, false, {
                    fileName: "[project]/web/src/app/login/page.tsx",
                    lineNumber: 65,
                    columnNumber: 49
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[30px] h-[30px] font-light text-[0.775rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white flex items-center justify-center",
                    children: "OR"
                }, void 0, false, {
                    fileName: "[project]/web/src/app/login/page.tsx",
                    lineNumber: 65,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/web/src/app/login/page.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            children: "Email"
        }, void 0, false, {
            fileName: "[project]/web/src/app/login/page.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "LoginForm[<input>.onChange]": (e_0)=>setEmail(e_0.target.value)
        })["LoginForm[<input>.onChange]"];
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== email) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center gap-2",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    value: email,
                    onChange: t6,
                    className: "p-4 border border-gray-300 rounded-[6px] focus:outline-none",
                    placeholder: "Enter email"
                }, void 0, false, {
                    fileName: "[project]/web/src/app/login/page.tsx",
                    lineNumber: 88,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/web/src/app/login/page.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[10] = email;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            children: "Password"
        }, void 0, false, {
            fileName: "[project]/web/src/app/login/page.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "LoginForm[<input>.onChange]": (e_1)=>setPassword(e_1.target.value)
        })["LoginForm[<input>.onChange]"];
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== password) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center gap-2",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    value: password,
                    onChange: t9,
                    className: "p-4 border border-gray-300 rounded-[6px] focus:outline-none",
                    placeholder: "Enter password"
                }, void 0, false, {
                    fileName: "[project]/web/src/app/login/page.tsx",
                    lineNumber: 112,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/web/src/app/login/page.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[14] = password;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10 || $[17] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col gap-4 mb-6",
            children: [
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/web/src/app/login/page.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t7;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "self-start text-neutral-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/auth/reset",
                className: "font-medium text-[#101540]",
                children: "Forgot Password"
            }, void 0, false, {
                fileName: "[project]/web/src/app/login/page.tsx",
                lineNumber: 129,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/web/src/app/login/page.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    const t13 = !isValid || isLoading;
    const t14 = `w-full max-w-93.75 py-3 rounded-md ${!isValid ? "bg-neutral-300 text-gray-500 cursor-not-allowed" : "bg-[#1366D9] text-white"}`;
    const t15 = isLoading ? "Logging in..." : "Login";
    let t16;
    if ($[20] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: t15
            }, void 0, false, {
                fileName: "[project]/web/src/app/login/page.tsx",
                lineNumber: 139,
                columnNumber: 68
            }, this)
        }, void 0, false, {
            fileName: "[project]/web/src/app/login/page.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[20] = t15;
        $[21] = t16;
    } else {
        t16 = $[21];
    }
    let t17;
    if ($[22] !== t13 || $[23] !== t14 || $[24] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: t13,
            className: t14,
            children: t16
        }, void 0, false, {
            fileName: "[project]/web/src/app/login/page.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[22] = t13;
        $[23] = t14;
        $[24] = t16;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-neutral-900",
            children: [
                "New User?",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/signup",
                    className: "text-[#1366D9]",
                    children: "Create Account"
                }, void 0, false, {
                    fileName: "[project]/web/src/app/login/page.tsx",
                    lineNumber: 157,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/web/src/app/login/page.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[26] = t18;
    } else {
        t18 = $[26];
    }
    let t19;
    if ($[27] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-6",
            children: [
                t12,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/web/src/app/login/page.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[27] = t17;
        $[28] = t19;
    } else {
        t19 = $[28];
    }
    let t20;
    if ($[29] !== handleSubmit || $[30] !== t11 || $[31] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "w-full max-w-[445px] mx-auto px-9 py-6 border border-[#E7E7E7]",
                children: [
                    t3,
                    t4,
                    t11,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/web/src/app/login/page.tsx",
                lineNumber: 172,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/web/src/app/login/page.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[29] = handleSubmit;
        $[30] = t11;
        $[31] = t19;
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    return t20;
}
_s(LoginForm, "yspgUKwL8+ls5NvZJ6y/WXStyVE=");
_c = LoginForm;
function _LoginFormHandleGoogleSignIn() {
    console.log("Google Sign-In clicked");
}
var _c;
__turbopack_context__.k.register(_c, "LoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=web_src_app_login_page_tsx_7ec9451a._.js.map