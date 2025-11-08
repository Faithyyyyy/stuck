(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/web/src/app/signup/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Signup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Signup() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    if ($[0] !== "79d9184bdc365bb805ce238d3547406331d2a9db5f2c0c3cb80f16030d48bc50") {
        for(let $i = 0; $i < 59; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "79d9184bdc365bb805ce238d3547406331d2a9db5f2c0c3cb80f16030d48bc50";
    }
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {};
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] !== email || $[3] !== name || $[4] !== password) {
        t1 = ({
            "Signup[validate]": ()=>{
                const newErrors = {};
                if (!name || name.length < 2 || !/^[a-zA-Z\s]+$/.test(name)) {
                    newErrors.name = "Name must be at least 2 letters and only contain letters and spaces";
                }
                if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
                    newErrors.email = "Enter a valid email";
                }
                if (!password || password.length < 6 || !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/.test(password)) {
                    newErrors.password = "Password must be at least 6 characters and include letters, numbers, and special characters";
                }
                setErrors(newErrors);
                return Object.keys(newErrors).length === 0;
            }
        })["Signup[validate]"];
        $[2] = email;
        $[3] = name;
        $[4] = password;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const validate = t1;
    let t2;
    if ($[6] !== email || $[7] !== name || $[8] !== password || $[9] !== validate) {
        t2 = ({
            "Signup[handleSubmit]": (e)=>{
                e.preventDefault();
                if (!validate()) {
                    return;
                }
                setIsLoading(true);
                setTimeout({
                    "Signup[handleSubmit > setTimeout()]": ()=>{
                        console.log({
                            name,
                            email,
                            password
                        });
                        setIsLoading(false);
                    }
                }["Signup[handleSubmit > setTimeout()]"], 1500);
            }
        })["Signup[handleSubmit]"];
        $[6] = email;
        $[7] = name;
        $[8] = password;
        $[9] = validate;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    const handleSubmit = t2;
    const handleGoogleSignUp = _SignupHandleGoogleSignUp;
    const isValid = name && email && password;
    let t3;
    let t4;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            className: "font-lora font-medium text-[32px] text-neutral-950",
            children: "Create an account"
        }, void 0, false, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-light text-neutral-700 text-center mb-6",
            children: "Create your account to manage products, track inventory, and stay in control."
        }, void 0, false, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t4;
    } else {
        t3 = $[11];
        t4 = $[12];
    }
    let t5;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center gap-3",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "w-full border border-gray-300 flex items-center justify-center gap-4 p-4 rounded-md hover:bg-neutral-50 transition",
                    onClick: handleGoogleSignUp,
                    "aria-label": "Sign up with Google",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/google-icon-image.png",
                            alt: "Google sign-up",
                            width: 20,
                            height: 20
                        }, void 0, false, {
                            fileName: "[project]/web/src/app/signup/page.tsx",
                            lineNumber: 98,
                            columnNumber: 294
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-neutral-900",
                            children: "Sign up with Google"
                        }, void 0, false, {
                            fileName: "[project]/web/src/app/signup/page.tsx",
                            lineNumber: 98,
                            columnNumber: 376
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/web/src/app/signup/page.tsx",
                    lineNumber: 98,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full my-10 relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "border-[0.5px] border-gray-300"
                }, void 0, false, {
                    fileName: "[project]/web/src/app/signup/page.tsx",
                    lineNumber: 105,
                    columnNumber: 49
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[30px] h-[30px] font-light text-[0.775rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white flex items-center justify-center",
                    children: "OR"
                }, void 0, false, {
                    fileName: "[project]/web/src/app/signup/page.tsx",
                    lineNumber: 105,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            children: "Name"
        }, void 0, false, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "Signup[<input>.onChange]": (e_0)=>setName(e_0.target.value)
        })["Signup[<input>.onChange]"];
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== name) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: name,
            onChange: t8,
            className: "p-4 border border-gray-300 rounded-[6px] focus:outline-none",
            placeholder: "Enter your name"
        }, void 0, false, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[17] = name;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== errors.name) {
        t10 = errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            className: "text-red-400",
            children: errors.name
        }, void 0, false, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 136,
            columnNumber: 26
        }, this);
        $[19] = errors.name;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t10 || $[22] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center gap-2",
            children: [
                t7,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t9;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            children: "Email"
        }, void 0, false, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "Signup[<input>.onChange]": (e_1)=>setEmail(e_1.target.value)
        })["Signup[<input>.onChange]"];
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== email) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "email",
            value: email,
            onChange: t13,
            className: "p-4 border border-gray-300 rounded-[6px] focus:outline-none",
            placeholder: "Enter email"
        }, void 0, false, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[26] = email;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== errors.email) {
        t15 = errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            className: "text-red-400",
            children: errors.email
        }, void 0, false, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 177,
            columnNumber: 27
        }, this);
        $[28] = errors.email;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== t14 || $[31] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center gap-2",
            children: [
                t12,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[30] = t14;
        $[31] = t15;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    let t17;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            children: "Password"
        }, void 0, false, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[33] = t17;
    } else {
        t17 = $[33];
    }
    let t18;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = ({
            "Signup[<input>.onChange]": (e_2)=>setPassword(e_2.target.value)
        })["Signup[<input>.onChange]"];
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] !== password) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "password",
            value: password,
            onChange: t18,
            className: "p-4 border border-gray-300 rounded-[6px] focus:outline-none",
            placeholder: "Enter password"
        }, void 0, false, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[35] = password;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== errors.password) {
        t20 = errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            className: "text-red-400",
            children: errors.password
        }, void 0, false, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 218,
            columnNumber: 30
        }, this);
        $[37] = errors.password;
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] !== t19 || $[40] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center gap-2",
            children: [
                t17,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[39] = t19;
        $[40] = t20;
        $[41] = t21;
    } else {
        t21 = $[41];
    }
    let t22;
    if ($[42] !== t11 || $[43] !== t16 || $[44] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col gap-4 mb-6",
            children: [
                t11,
                t16,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[42] = t11;
        $[43] = t16;
        $[44] = t21;
        $[45] = t22;
    } else {
        t22 = $[45];
    }
    const t23 = !isValid || isLoading;
    const t24 = `w-full max-w-93.75 py-3 rounded-md ${!isValid ? "bg-neutral-300 text-gray-500 cursor-not-allowed" : "bg-[#1366D9] text-white"}`;
    const t25 = isLoading ? "Signing up..." : "Sign Up";
    let t26;
    if ($[46] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: t25
            }, void 0, false, {
                fileName: "[project]/web/src/app/signup/page.tsx",
                lineNumber: 248,
                columnNumber: 68
            }, this)
        }, void 0, false, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[46] = t25;
        $[47] = t26;
    } else {
        t26 = $[47];
    }
    let t27;
    if ($[48] !== t23 || $[49] !== t24 || $[50] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: t23,
            className: t24,
            children: t26
        }, void 0, false, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[48] = t23;
        $[49] = t24;
        $[50] = t26;
        $[51] = t27;
    } else {
        t27 = $[51];
    }
    let t28;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-neutral-900",
            children: [
                "Already have an account?",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/login",
                    className: "text-[#1366D9] font-semibold",
                    children: "Log in"
                }, void 0, false, {
                    fileName: "[project]/web/src/app/signup/page.tsx",
                    lineNumber: 266,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[52] = t28;
    } else {
        t28 = $[52];
    }
    let t29;
    if ($[53] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-6",
            children: [
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[53] = t27;
        $[54] = t29;
    } else {
        t29 = $[54];
    }
    let t30;
    if ($[55] !== handleSubmit || $[56] !== t22 || $[57] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "w-full max-w-[445px] mx-auto px-9 py-6 border border-[#E7E7E7]",
                children: [
                    t5,
                    t6,
                    t22,
                    t29
                ]
            }, void 0, true, {
                fileName: "[project]/web/src/app/signup/page.tsx",
                lineNumber: 281,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/web/src/app/signup/page.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[55] = handleSubmit;
        $[56] = t22;
        $[57] = t29;
        $[58] = t30;
    } else {
        t30 = $[58];
    }
    return t30;
}
_s(Signup, "WpSFxMBJUCTgVYJG7R0VZO+T/ic=");
_c = Signup;
function _SignupHandleGoogleSignUp() {
    console.log("Google Sign-Up clicked");
}
var _c;
__turbopack_context__.k.register(_c, "Signup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=web_src_app_signup_page_tsx_8c69b332._.js.map