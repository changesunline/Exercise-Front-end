<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="form.css">
</head>
<body>
	<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
		<!-- autocomplete可以让表单不记住之前所填写的值 -->
		<fieldset>
			<legend>Student File</legend>
			<label for="name">姓名：</label>
			<input type="text" name="name" id="name" placeholder="请输入姓名" autocomplete="off">
			<label for="telephone">手机号码：</label>
			<input type="tel" name="telephone" id="telephone" pattern="^1\d{10}$">
			<label for="email">邮箱地址：</label>
			<input type="email" name="email" id="email" required>
			<label for="college">所属学院：</label>
			<input type="text" name="college" id="college" list="clist" placeholder="请选择">
			<datalist id="clist">
				<option label="前端">html学院</option>
				<option label="java">java学院</option>
				<option label="c/c++">C++学院</option>
				<option label="python">Python学院</option>
				<option label="php">php学院</option>
				<option label="c#">.net学院</option>
			</datalist>
			<label for="score">入学成绩：</label>
			<input type="number" name="score" id="score" value="0" min="0" max="100">
			<label for="grade">基础水平：</label>
			<meter id="grade" min="0" max="100" low="60" high="85" optimum="95"></meter>
			<label for="enrollment">入学日期：</label>
			<input type="date" name="enrollment" id="enrollment">
			<label for="graduation">毕业日期：</label>
			<input type="date" name="graduation" id="graduation">
			<input type="submit" name="submit" value="提交">
		</fieldset>
	</form>
	<script type="text/javascript">
		window.onload = function(){
			var score = document.getElementById("score");
			score.addEventListener("input", function () {
				var meter = document.getElementById("grade");
				meter.value = this.value;
			});
		};
	</script>
</body>
</html>