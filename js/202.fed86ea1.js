"use strict";(self["webpackChunkjumun"]=self["webpackChunkjumun"]||[]).push([[202],{202:(e,a,s)=>{s.r(a),s.d(a,{default:()=>k});var l=s(3673);const t={class:"column q-pa-lg"},o={class:"row"},r=(0,l._)("h4",{class:"text-h5 text-white q-my-md"},"Company & Co",-1),n={class:"absolute-bottom-right q-pr-md",style:{transform:"translateY(50%)"}},u={class:"text-center q-pa-md q-gutter-md"},d=(0,l._)("p",{class:"text-grey-6"},"Forgot your password?",-1);function m(e,a,s,m,i,c){const p=(0,l.up)("q-btn"),w=(0,l.up)("q-card-section"),g=(0,l.up)("q-icon"),f=(0,l.up)("q-input"),h=(0,l.up)("q-form"),q=(0,l.up)("q-card-actions"),b=(0,l.up)("q-card"),W=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(W,{class:"window-height window-width row justify-center items-center",style:{background:"linear-gradient(#8274c5, #5a4a9f)"}},{default:(0,l.w5)((()=>[(0,l._)("div",t,[(0,l._)("div",o,[(0,l.Wm)(b,{square:"",class:"shadow-24",style:{width:"300px",height:"485px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{class:"bg-deep-purple-7"},{default:(0,l.w5)((()=>[r,(0,l._)("div",n,[(0,l.Wm)(p,{fab:"",icon:"add",onClick:a[0]||(a[0]=e=>c.goPage("/signUp")),color:"purple-4"})])])),_:1}),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(h,{class:"q-px-sm q-pt-xl"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{square:"",clearable:"",modelValue:i.email,"onUpdate:modelValue":a[1]||(a[1]=e=>i.email=e),type:"email",label:"Email"},{prepend:(0,l.w5)((()=>[(0,l.Wm)(g,{name:"email"})])),_:1},8,["modelValue"]),(0,l.Wm)(f,{square:"",clearable:"",modelValue:i.password,"onUpdate:modelValue":a[2]||(a[2]=e=>i.password=e),type:"password",label:"Password"},{prepend:(0,l.w5)((()=>[(0,l.Wm)(g,{name:"lock"})])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l._)("div",u,[(0,l.Wm)(p,{round:"",color:"indigo-7"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{name:"fab fa-facebook-f",size:"1.2rem"})])),_:1}),(0,l.Wm)(p,{round:"",color:"red-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{name:"fab fa-google-plus-g",size:"1.2rem"})])),_:1}),(0,l.Wm)(p,{round:"",color:"light-blue-5"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{name:"fab fa-twitter",size:"1.2rem"})])),_:1})])])),_:1}),(0,l.Wm)(q,{class:"q-px-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{onClick:a[3]||(a[3]=e=>c.signIn()),unelevated:"",size:"lg",color:"purple-4",class:"full-width text-white",label:"Sign In"})])),_:1}),(0,l.Wm)(w,{class:"text-center q-pa-sm"},{default:(0,l.w5)((()=>[d])),_:1})])),_:1})])])])),_:1})}const i={name:"Login",data(){return{email:"",password:""}},methods:{async signIn(){const{user:e,session:a,error:s}=await this.$supabase.auth.signIn({email:this.email,password:this.password});null===s?this.goPage("/"):400===s.status&&alert("아이디 혹은 비밀번호를 확인해 주세요")},goPage(e){this.$router.push(e)}}};var c=s(4260),p=s(4379),w=s(151),g=s(5589),f=s(8240),h=s(5269),q=s(4842),b=s(4554),W=s(9367),_=s(7518),x=s.n(_);const y=(0,c.Z)(i,[["render",m]]),k=y;x()(i,"components",{QPage:p.Z,QCard:w.Z,QCardSection:g.Z,QBtn:f.Z,QForm:h.Z,QInput:q.Z,QIcon:b.Z,QCardActions:W.Z})}}]);