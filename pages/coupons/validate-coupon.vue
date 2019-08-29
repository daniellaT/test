<template>
        <v-layout>
            <v-flex xs12>
                <addCoupon/>
                <coupons/>
            </v-flex>
        </v-layout>
</template>

<script>
import addCoupon from "../../components/coupon/add.vue"
import coupons from "../../components/coupon/coupons.vue"
export default {
    components: {
    addCoupon,
    coupons
    }
}
</script>

