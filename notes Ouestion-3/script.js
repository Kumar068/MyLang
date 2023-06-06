function setup() {
    var commentList = document.getElementById("commentList");
    var postCommentBtn = document.getElementById("postComment");
    var commentInput = document.getElementById("comment");
  
    postCommentBtn.addEventListener("click", function () {
      var commentText = commentInput.value.trim();
  
      if (commentText !== "") {
        var newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = "";
      }
    });
  }
  
  setup();
  