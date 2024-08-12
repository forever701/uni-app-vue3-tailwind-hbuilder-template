<template>
	<view class="content home-bg">
		<!-- <view class="absolute w-full h-[44px] top-bg top-0 z-20 px-3 flex items-center">
			<image src="@/static/images/rrlogo.png" alt="" class="h-[38px]" mode="heightFix" />
			<view class="flex items-center gap-1.5 px-[5px] balance-bg rounded-full h-8 ml-auto">
				<image src="../../static/images/usdt.png" mode="heightFix" class="h-[18px]"></image>
				<view>0.00</view>
				<image src="../../static/images/refresh.png" mode="heightFix" class="h-[18px]"></image>
			</view>
			<view class="btn-bg w-[72px] h-8 rounded-full flex items-center justify-center text-xs ml-2">{{$t('充值')}}
			</view>
		</view> -->
		<view class="z-10 flex-1 overflow-auto relative pb-[94px]">
			<view class="flex mb-2.5">
				<view v-for="(menu,index) in menus" :key="index" class="flex flex-col items-center flex-1">
					<image :src="$utils.getImageUrl(menu.icon)" mode="heightFix" class="h-[38px]"></image>
					<view class="text-xs mt-2">
						{{menu.title}}
					</view>
				</view>
			</view>
			<view class="px-[15px]">
				<view class="">
					<view v-for="(collet,index) in collets" :key="index" class="flex items-center h-[56px]">
						<view class="h-6 w-6 overflow-hidden">
							<image :src="$utils.getImageUrl(collet.icon)" mode="heightFix" class="h-6 w-6"></image>
						</view>
						<view class="text-xs ml-2.5">
							{{collet.title}}
						</view>
					</view>
				</view>
				
				<view class="w-full flex items-center justify-center btn-bg rounded-2xl h-[55px]">{{ $t('退出登录') }}
				</view>

			</view>
		</view>
		<Tabbar />
	</view>
</template>


<script setup lang="js">
	import {
		computed
	} from "vue";
	import Tabbar from "@/components/Tabbar.vue"
	import {
		useI18n
	} from "vue-i18n"

	const {
		t
	} = useI18n()
	const menus = computed(() => [{
			title: t('邀请好友'),
			icon: '邀请好友.svg',
			url: 'pages/index/index'
		},
		{
			title: t('我的收入'),
			icon: '我的收入.svg',
			url: 'pages/activity/index'
		},
		{
			title: t('投注记录'),
			icon: '投注记录.svg',
			url: 'pages/service/index'
		},
		{
			title: t('安全中心'),
			icon: '安全中心.svg',
			url: 'pages/proxy/index'
		}
	])

	const collets = computed(() => [{
			title: t('任务中心'),
			icon: 'icon_任务中心.svg',
			url: 'pages/index/index'
		},
		{
			title: t('红包'),
			icon: 'icon_红包.svg',
			url: 'pages/activity/index'
		},
		{
			title: t('口令红包'),
			icon: 'icon_口令红包.svg',
			url: 'pages/service/index'
		},
		{
			title: t('输赢报表'),
			icon: 'icon_输赢报表.svg',
			url: 'pages/proxy/index'
		},
		{
			title: t('充提记录'),
			icon: 'icon_充提记录.svg',
			url: 'pages/activity/index'
		},
		{
			title: t('交易记录'),
			icon: 'icon_交易记录.svg',
			url: 'pages/service/index'
		},
		{
			title: t('代理合作'),
			icon: 'icon_代理合作.svg',
			url: 'pages/proxy/index'
		},
		{
			title: t('购买货币'),
			icon: 'icon_购买货币.svg',
			url: 'pages/activity/index'
		},
		{
			title: t('推荐VPN'),
			icon: 'icon_推荐VPN.svg',
			url: 'pages/service/index'
		}
	])
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