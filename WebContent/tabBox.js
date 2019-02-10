var tabBox = {
	__liSelected : null,
	init: function(){
		document.getElementById("tab1").onclick = this.__onClicked;
		document.getElementById("tab2").onclick = this.__onClicked;
		document.getElementById("tab3").onclick = this.__onClicked;
		document.getElementById("tab4").onclick = this.__onClicked;
		document.getElementById("tab5").onclick = this.__onClicked;
	},
	__onClicked : function(){
		if(tabBox.__liSelected != null){
			tabBox.__liSelected.className="";
		}
		 this.className = "seleted";
		tabBox.__liSelected = this;
}
		
}