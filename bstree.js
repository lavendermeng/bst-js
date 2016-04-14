/**
 * Created by cmeng on 4/14/16.
 */
(function(){
  var BSTree = {
    root: null,
    node: function(data,left,right){
      return {
        data:data,
        left:left,
        right:right
      };
    },
    insert: function(data) {
      var t = this;
      if(!t.root){
        t.root = t.node(data,null,null);
      }else{
        var currNode = t.root;
        var newNode = t.node(data, null, null);
        while (currNode) {
          if (data < currNode.data) {
            if (!currNode.left) {
              currNode.left = newNode;
              break;
            } else {
              currNode = currNode.left;
            }
          } else {
            if (!currNode.right) {
              currNode.right = newNode;
              break;
            } else {
              currNode = currNode.right;
            }
          }
        }
      }
    },
    dfs: function(node){
      if(node){
        console.log(node.data);
        dfs(node.left);
        dfs(node.right);
      }
    },
    minNumber: function(node){
      var t = this;
      if(!node){
        return 0;
      }
      if(node.left){
        return t.minNumber(node.left);
      }
      return node.data;
    },
    depth: function(node){
      var t = this;
      if(!node){
        console.log("empty");
        return 0;
      }else{
        console.log(node.data);
        var a = t.depth(node.left);
        console.log("a = " + a);
        var b = t.depth(node.right);
        console.log("b = " + b);
        return (a > b) ? (a+1):(b+1);
      }
    }
  };
  BSTree.insert(8);
  BSTree.insert(9);
  BSTree.insert(3);
  BSTree.insert(1);
  BSTree.insert(5);
  BSTree.insert(6);
  BSTree.insert(7);
  BSTree.depth(BSTree.root);
})();
