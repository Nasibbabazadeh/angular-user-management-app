import './polyfills.server.mjs';
import{a as u}from"./chunk-YWERPAIF.mjs";import{a as c}from"./chunk-N73NIJCE.mjs";import"./chunk-KB3MMIXW.mjs";import"./chunk-J4BDXTMW.mjs";import{M as a,ba as e,ca as t,hb as m,lb as p,ma as i,p as o,ra as d}from"./chunk-SOET56QL.mjs";import"./chunk-VVCT4QZE.mjs";var v=(()=>{class s{constructor(n,r,l){this._activated=n,this._userService=r,this._error=l,this.userId=null,this.user=null}ngOnInit(){this._activated.params.subscribe(n=>{this.userId=+n.id,this.loadUserById()})}loadUserById(){this.userId!==null&&this._userService.getUserById(this.userId).subscribe({next:n=>{this.user=n,console.log(n)},error:n=>{this._error.handleError(n)}})}static{this.\u0275fac=function(r){return new(r||s)(a(m),a(u),a(c))}}static{this.\u0275cmp=o({type:s,selectors:[["app-user-detailed"]],standalone:!0,features:[d],decls:42,vars:0,consts:[[1,"max-w-md","mx-auto","bg-white","shadow-lg","rounded-lg","overflow-hidden","my-4"],[1,"px-6","py-4"],[1,"text-xl","font-bold","mb-2","text-gray-800"],[1,"list-none"],[1,"mb-3"],[1,"font-semibold","text-gray-700"],[1,"text-gray-600"],["routerLink","./posts"]],template:function(r,l){r&1&&(e(0,"div",0)(1,"div",1)(2,"h2",2),i(3,"User Information"),t(),e(4,"ul",3)(5,"li",4)(6,"span",5),i(7,"Name: "),t(),e(8,"span",6),i(9,"Dustin O'Kon"),t()(),e(10,"li",4)(11,"span",5),i(12,"Email: "),t(),e(13,"span",6),i(14,"Freddy.Wolf37gmail.com"),t()(),e(15,"li",4)(16,"span",5),i(17,"Job Description: "),t(),e(18,"span",6),i(19,"Lead"),t()(),e(20,"li",4)(21,"span",5),i(22,"Profession: "),t(),e(23,"span",6),i(24,"Officer"),t()(),e(25,"li",4)(26,"span",5),i(27,"Card: "),t(),e(28,"span",6),i(29,"106"),t()(),e(30,"li",4)(31,"span",5),i(32,"Currency: "),t(),e(33,"span",6),i(34,"Kuwaiti Dinar"),t()(),e(35,"li",4)(36,"span",5),i(37,"Address: "),t(),e(38,"span",6),i(39,"Robinside"),t()()()(),e(40,"a",7),i(41,"Userin postlar\u0131na bax"),t()())},dependencies:[p],encapsulation:2})}}return s})();export{v as UserDetailedComponent};
