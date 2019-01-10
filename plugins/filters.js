import Vue from "vue";

import { dateFrShort } from "~/utils/date";
import { formatWords } from "~/utils/string";

Vue.filter("dateFrShort", dateFrShort);
Vue.filter("formatWords", formatWords);
