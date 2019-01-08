webpackJsonp([18],{oJE9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("BO1k"),a=n.n(o),i=n("Xxa5"),r=n.n(i),s=n("exGp"),l=n.n(s),c=n("qSVB"),u=n("jmBq"),d={name:"rolepermission",data:function(){return{serverData:[],serverPagination:{page:1,rowsNumber:0,rowsPerPage:10},columns:[{name:"name",required:!0,label:this.$t("Role name"),align:"left",field:"name",sortable:!0},{name:"code",label:this.$t("Role code"),field:"code",sortable:!0,align:"left"},{name:"id",required:!0,label:this.$t("ID"),align:"left",field:"id"}],filter:{name:"",code:""},loading:!1,editModal:!1,menuList:[],selected:0,roleId:0,roleName:"",moduleFunctions:{moduleFunctions:[],roleFunctions:[]}}},methods:{request:function(e){var t=this;return l()(r.a.mark(function n(){var o,a,i,s,l,u,d,f;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,t.serverPagination=e.pagination,t.$refs.table,o=e.pagination,a=o.page,i=o.rowsPerPage,s=o.sortBy,l=o.descending,u={pageIndex:a,pageSize:i,sortBy:s,descending:l,filter:t.filter},n.next=6,Object(c.c)(u);case 6:d=n.sent,f=d.data.data,t.serverPagination.rowsNumber=f.totalCount,t.serverData=f.rows,setTimeout(function(){t.loading=!1},500);case 11:case"end":return n.stop()}},n,t)}))()},editPermission:function(e){var t=this;return l()(r.a.mark(function n(){var o,i,s;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.b)();case 2:o=n.sent,i=o.data.data,function e(t,n){var o=!0,i=!1,r=void 0;try{for(var s,l=a()(t);!(o=(s=l.next()).done);o=!0){var c=s.value,u={id:c.id,parentId:c.parentId,label:c.title,name:c.name,path:c.path,icon:c.icon,leftMemu:c.leftMemu,functionCode:c.functionCode,isLock:c.isLock,sort:c.sort,children:[]};c.children&&c.children.length>0&&e(c.children,u.children),n.push(u)}}catch(e){i=!0,r=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw r}}}(i,s=[]),t.menuList=s,t.editModal=!0,t.roleId=e.value,t.roleName=e.row.name,t.selected=0,t.moduleFunctions.moduleFunctions=[],t.moduleFunctions.roleFunctions=[];case 14:case"end":return n.stop()}},n,t)}))()},search:function(){this.request({pagination:this.serverPagination,filter:this.filter})},getModuleFunctions:function(e){var t=this;return l()(r.a.mark(function n(){var o;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,Object(u.d)({menuId:e,roleId:t.roleId});case 4:o=n.sent,t.moduleFunctions.moduleFunctions=o.data.data.menuFunctions.map(function(e){var t=JSON.parse(window.JSON.stringify(e.functions).replace(/name/g,"label").replace(/id/g,"value"));return e.functions=t.map(function(e){return e.value=window.JSON.stringify({id:e.value,moduleId:e.moduleId}),e}),e}),t.moduleFunctions.roleFunctions=o.data.data.roleFunctions.map(function(e){return window.JSON.stringify({id:e.functionId,moduleId:e.moduleId})});case 7:case"end":return n.stop()}},n,t)}))()},savePermission:function(){var e=this;return l()(r.a.mark(function t(){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={roleId:e.roleId,permissions:e.moduleFunctions.roleFunctions,moduleId:e.selected},t.next=3,Object(c.d)(n);case 3:e.$q.notify({type:"positive",message:e.$t("Saved successfully"),position:"bottom-right"});case 4:case"end":return t.stop()}},t,e)}))()}},mounted:function(){this.request({pagination:this.serverPagination,filter:this.filter})},watch:{selected:function(e){this.getModuleFunctions(e)}}},f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{padding:"10px"}},[n("q-card",{staticClass:"fit shadow-6",attrs:{inline:""}},[n("q-card-main",{staticStyle:{height:"80%"}},[n("q-table",{ref:"table",attrs:{color:"primary",data:e.serverData,columns:e.columns,selection:"none","row-key":"id",pagination:e.serverPagination,loading:e.loading,"rows-per-page-label":e.$t("Rows per page"),"no-data-label":e.$t("No data")},on:{"update:pagination":function(t){e.serverPagination=t},request:e.request},scopedSlots:e._u([{key:"top-left",fn:function(t){return[n("q-input",{attrs:{type:"text",prefix:e.$t("Role name")+"："},model:{value:e.filter.name,callback:function(t){e.$set(e.filter,"name",t)},expression:"filter.name"}}),e._v("  \n            "),n("q-input",{attrs:{type:"text",prefix:e.$t("Role code")+"："},model:{value:e.filter.code,callback:function(t){e.$set(e.filter,"code",t)},expression:"filter.code"}}),e._v("  \n            "),n("q-btn",{attrs:{push:"",dense:"",color:"primary",icon:"search"},on:{click:e.search}},[e._v(e._s(e.$t("Search")))]),e._v("  \n          ")]}},{key:"top-right",fn:function(e){return[n("q-btn",{attrs:{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:e.toggleFullscreen}})]}},{key:"body-cell-id",fn:function(t){return n("q-td",{staticStyle:{width:"200px"},attrs:{props:t}},[n("q-btn",{attrs:{glossy:"",dense:"",color:"primary",icon:"edit",label:e.$t("Edit")},on:{click:function(n){e.editPermission(t)}}})],1)}}])})],1)],1),e._v(" "),n("q-modal",{attrs:{maximized:""},model:{value:e.editModal,callback:function(t){e.editModal=t},expression:"editModal"}},[n("q-modal-layout",[n("q-toolbar",{attrs:{slot:"header"},slot:"header"},[n("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"reply"},on:{click:function(t){e.editModal=!1}}}),e._v(" "),n("q-toolbar-title",[e._v("\n            "+e._s(e.$t("Editing role"))+" \n            "),n("q-chip",{attrs:{small:""}},[e._v(e._s(e.roleName))]),e._v(" "+e._s(e.$t("Permission"))+"\n          ")],1)],1),e._v(" "),n("q-toolbar",{attrs:{slot:"footer"},slot:"footer"},[n("q-toolbar-title"),e._v(" "),n("q-btn",{attrs:{round:"",disable:0==e.selected},on:{click:e.savePermission}},[e._v(e._s(e.$t("Save")))]),e._v(" "),n("q-btn",{attrs:{round:"",color:"red"},on:{click:function(t){e.editModal=!1}}},[e._v(e._s(e.$t("Cancel")))])],1),e._v(" "),n("div",{staticClass:"row",staticStyle:{padding:"20px"},attrs:{"gutter-xs":""}},[n("div",{staticClass:"col-4 shadow-6 padding-10"},[n("q-tree",{attrs:{nodes:e.menuList,selected:e.selected,"node-key":"id","default-expand-all":""},on:{"update:selected":function(t){e.selected=t}}})],1),e._v(" "),n("div",{staticClass:"col"}),e._v(" "),n("div",{staticClass:"col-8 shadow-6"},[n("q-card",{staticClass:"fit",attrs:{inline:""}},[n("q-card-title",[n("q-chip",{attrs:{square:"",small:""}},[e._v(e._s(e.$t("Module function")))]),e._v(" "),n("q-icon",{attrs:{slot:"right",name:"edit"},slot:"right"})],1),e._v(" "),n("q-card-main",{staticStyle:{height:"80%"}},e._l(e.moduleFunctions.moduleFunctions,function(t){return n("q-collapsible",{key:t.id,attrs:{popup:"",opened:t.functions.length>0,icon:t.icon,label:t.title,sublabel:t.name}},[t.functions.length>0?n("div",[n("q-option-group",{attrs:{inline:"",type:"checkbox",color:"primary",options:t.functions},model:{value:e.moduleFunctions.roleFunctions,callback:function(t){e.$set(e.moduleFunctions,"roleFunctions",t)},expression:"moduleFunctions.roleFunctions"}})],1):e._e()])}))],1)],1)])],1)],1)],1)},p=[];f._withStripped=!0;var m=n("XyMi"),v=Object(m.a)(d,f,p,!1,null,null,null);v.options.__file="src\\pages\\permission\\rolepermission.vue";t.default=v.exports},qSVB:function(e,t,n){"use strict";t.c=function(e){return Object(o.a)({url:"/role/pagedlist",method:"get",params:e})},t.a=function(e){return Object(o.a)({url:"/role/del",method:"delete",params:e,loading:"hourglass"})},t.b=function(e){return Object(o.a)({url:"/role/batchdel",method:"delete",params:e,loading:"hourglass"})},t.e=function(e){return Object(o.a)({url:"/role/save",method:"post",data:e,loading:"hourglass"})},t.d=function(e){return Object(o.a)({url:"/role/savepermission",method:"post",data:e,loading:"hourglass"})};var o=n("wY7H")}});