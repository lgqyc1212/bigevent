// 关于category

var category = {
    
    show:function(callBack){
        $.get(URLIST.category_show,function(res){
            callBack(res);
        });
    },
    add:function(name,slug,callBack){
        $.post(URLIST.category_add,{name:name,slug:slug},function(res){
            callBack(res);
        }); 
    },
    delete:function(id,callBack){
        $.post(URLIST.category_delete,{id:id},function(res){
            callBack(res);
        }); 
    },
    /**
     * 
     * @param {*} id 
     * @param {*} name 
     * @param {*} slug 
     * @param {*} callBack 
     */
    edit:function(id,name,slug,callBack){
        $.post(URLIST.category_edit,{id:id,name:name,slug:slug},function(res){
            callBack(res);
        }); 
    },
};