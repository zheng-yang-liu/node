<template>
	<view>
		<view class="free_card_box" v-for="(item,index) in teaList" :key="index">
		<view class="free_card_img">
			<image :src="item.teacher_logo" mode="">{{ item.limiName }}</image>
			<view class="free_card_info">
				<view class="free_card_info_txt">
					<view class="info_txt1">{{item.teacher_name}}</view>
				</view>
				<view>{{item.limitNum}}人学过</view>
			</view>
			<view class="free_card_info_btn">{{item.baoming}}</view>
			<view class="free_card_info_btn free_card_info_btn1"></view>
		</view>
		<view class="free_card_txt">
			<view class="free_card_T"></view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"free-card",
		data() {
			return {
					teaList:[]
			}
		},
		methods() {
			uni.request({
				url:"http://html5.cn/api/index/specific?userid=2162",
				success:(res) =>{
					console.log(res.data)
					this.teaList = res.data.datd
				}
			})
		}
	}
</script>

<style>

</style>
