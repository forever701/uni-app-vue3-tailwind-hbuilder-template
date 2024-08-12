<script>
export default {
	onLaunch: function () {
		console.log('App Launch')
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	}
}
</script>

<style lang="scss">
@import 'tailwindcss/base';
@import 'tailwindcss/utilities';
html{
	height: 100%;
	// height: calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));
	width: 100%;
	padding: 0;
	margin: 0;
	font-family: "PingFang SC";
	background-color: #151e34;
	color: #fff;
	overflow: hidden;
	display: flex;
	align-items: center;
	padding-top: env(safe-area-inset-top);
	padding-bottom: env(safe-area-inset-bottom);
	box-sizing: border-box;
}
body {
	
	height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
	font-family: "PingFang SC";
	background-color: #151e34;
	overflow: hidden;
}

uni-page-body{
	height: 100%;
	width: 100%;
	color: #fff;
	overflow: hidden;
}

.content{
	height: 100%;
	width: 100%;
	overflow: hidden;
	position: relative;
	display: flex;
	left: 50%;
	transform: translateX(-50%);
	max-width: 428px;
}

.btn-bg{
	background-image: linear-gradient(-46deg, #240bfd, #b42dff);
}
</style>
