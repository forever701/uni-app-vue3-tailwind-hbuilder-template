<template>
	<view class="content home-bg">
		<view class="absolute w-full h-[44px] top-bg top-0 z-20 px-3 flex items-center">
			<image src="@/static/images/rrlogo.png" alt="" class="h-[38px]" mode="heightFix" />
			<view class="flex items-center gap-1.5 px-[5px] balance-bg rounded-full h-8 ml-auto">
				<image src="../../static/images/usdt.png" mode="heightFix" class="h-[18px]"></image>
				<view>0.00</view>
				<image src="../../static/images/refresh.png" mode="heightFix" class="h-[18px]"></image>
			</view>
			<view class="btn-bg w-[72px] h-8 rounded-full flex items-center justify-center text-xs ml-2">{{$t('充值')}}
			</view>
		</view>
		<view class="z-10 flex-1 overflow-auto relative pb-[94px] pt-[44px] px-2.5">
			<view class="flex mb-2.5">
				<view v-for="(menu,index) in menus" :key="index" class="flex flex-col items-center flex-1">
					<image :src="$utils.getImageUrl(menu.icon)" mode="heightFix" class="h-[38px]"></image>
					<view class="text-xs">
						{{menu.title}}
					</view>
				</view>
			</view>
		</view>
		<Tabbar />
	</view>
</template>


<script setup lang="js">
	import Tabbar from "@/components/Tabbar.vue"
	import {
		useI18n
	} from "vue-i18n"

	const {
		t
	} = useI18n()
	const menus = [{
			title: t('提现'),
			icon: 'withdraw.png',
			url: 'pages/index/index'
		},
		{
			title: t('任务'),
			icon: 'task.png',
			url: 'pages/activity/index'
		},
		{
			title: t('我的收入'),
			icon: 'income.png',
			url: 'pages/service/index'
		},
		{
			title: t('邀请好友'),
			icon: 'invite.png',
			url: 'pages/proxy/index'
		},
		{
			title: t('投注记录'),
			icon: 'bettingRecords.png',
			url: 'pages/mine/index'
		}
	]
</script>

<style lang="scss" scoped>
	.top-bg {
		background-image: linear-gradient(270deg, rgba(86, 76, 252, .12) 9%, rgba(218, 45, 255, .12) 88%);
		backdrop-filter: blur(min(13.333vw, 57.067px));
	}

	.home-bg {
		background-image: url('@/static/images/bg/home.png');
		background-size: 100% auto;
		background-repeat: no-repeat;
	}

	.balance-bg {
		background: hsla(0, 0%, 100%, .1215686275);
	}
</style>