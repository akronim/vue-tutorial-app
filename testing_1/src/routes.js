import NestedRoute from "@/components/NestedRoute.vue";
import FooRoute from "@/components/FooRoute.vue";
import BarRoute from "@/components/BarRoute.vue";

export default [
  {
    path: "/",
  },
  {
    path: "/nested-route",
    component: NestedRoute,
    meta: {
      shouldBustCache: true,
    },
  },
  { path: "/foo", component: FooRoute },
  { path: "/bar", component: BarRoute },
];
