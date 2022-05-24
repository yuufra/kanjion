<template>
    <div id="container">
        <h1>中古音の声母（音節頭子音）</h1>
        <select v-model="selected">
            <option value="ja">日本語</option>
            <option value="en">English</option>
            <option value="Hant">繁體字</option>
            <option value="Hans">简体字</option>
        </select>
        <!-- <div>選択：{{ selected }}</div>  -->
        <div class="table-container">
            <EarlyInitialJa v-if="selected === 'ja'" />
            <EarlyInitialEn v-if="selected === 'en'" />
            <EarlyInitialHant v-if="selected === 'Hant'" />
            <EarlyInitialHans v-if="selected === 'Hans'" />
            <LateInitialHant v-if="selected === 'Hant'" />
            <LateInitialJa v-if="selected === 'ja'" />
            <LateInitialEn v-if="selected === 'en'" />
            <LateInitialHans v-if="selected === 'Hans'" />
        </div>
        <article>
            <h3>これは何？</h3>
            <p>隋や唐の時代における漢字の頭子音の発音を分類したもの。
            この時代の中国語の発音を中古音といい、現代中国の諸方言や日本語、韓国語と規則的な音韻対応を持っていて興味深い。
            しかし、中国音韻学で用いられる用語は一般的な音韻論で用いる用語と異なり敷居が高い。
            また、漢字を用いるため日本語の漢字と<span lang="zh-Hant">繁體字</span>、<span lang="zh-Hans">简体字</span>で
            字体が異なり混乱が見られる。そこで、この記事では日本語、英語、<span lang="zh-Hant">繁體字</span>、<span lang="zh-Hans">简体字</span>
            それぞれでの表記や用語を表にまとめている。
            </p>
            <p>漢字の横に示してあるのは再構音であり、学者によっても意見が分かれているので表にあるのはあくまで一例である。
            また筆者は専門家ではないのでこの記事はあくまで参考程度にしてほしい。
            </p>
            <p>また、この記事はVue.jsの練習を兼ねている。</p>
        </article>
        <section>
            <h3>参考</h3>
            <ul>            
                <li><a href="http://www.for.aichi-pu.ac.jp/museum/pdf/oningaku.pdf">音韻学入門 －中古音篇－</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Middle_Chinese">Middle_Chinese - Wikipedia</a></li>
                <li>その他各言語のWikipediaの記事</li>
            </ul>
        </section>
    </div>
</template>

<script>
import EarlyInitialHant from "./tables/EarlyInitialHant.vue";
import EarlyInitialJa from "./tables/EarlyInitialJa.vue";
import EarlyInitialEn from "./tables/EarlyInitialEn.vue";
import EarlyInitialHans from "./tables/EarlyInitialHans.vue";
import LateInitialHant from "./tables/LateInitialHant.vue";
import LateInitialJa from "./tables/LateInitialJa.vue";
import LateInitialEn from "./tables/LateInitialEn.vue";
import LateInitialHans from "./tables/LateInitialHans.vue";

export default {
    "name": "SelectLanguage",
    "data": function () {
        return {
            selected: "ja" //初期値
        };
    },
    components: {
        EarlyInitialHant,
        EarlyInitialJa,
        EarlyInitialEn,
        EarlyInitialHans,
        LateInitialHant,
        LateInitialJa,
        LateInitialEn,
        LateInitialHans
    }
}
</script>

<style>
div {
    padding: 10px;
}
table {
    border: solid 1px #ccc;
    border-collapse: collapse;
}
th {
    padding: 3px 10px;
    border: solid 1px #ccc;
    background-color: #eee;
}
td {
    padding: 3px 10px;
    border: solid 1px #ccc;
}
caption {
    padding: 5px;
}
article, section {
    margin: 0 auto;
    text-align: left;
    max-width: 700px;
}
#container {
    padding: 0px 20px;
}
.table-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>