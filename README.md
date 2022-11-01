package.json yarn 下去就對了


q1 代碼建議(含上次口述內容)

1. App.js 不是入口組件就砍掉，App.js 這名字就是入口的意思，不砍的話會讓人誤會 V
2. Tost() 首字建議小寫，class 才要首字大寫，方法首字小寫，這是基本代碼規範 V
3. local/sessionStorage 一律建議不要直接 get/set/removeItem 來進行操作，建議由 store 驅動這些資料，不然你要一直 parse 轉來轉去 V
4. 導路由請用 react 的方式導，不要用這種方式 window.location.href V
5. 密碼眼睛這種重複勞動請封裝  V
6. 值比較請用完全比較，=== 不是 ==，除非你要較驗 undefined 或 null V
7. className 命名要好，沒有 module 一律建議用 BEM，性能及可讀性較高，少用 <--未來的會優化，舊的先這樣吧...
8. 密碼格式較驗請改用正則，這種基礎正則一律建議正則處理 V
9. 測試 console 一律建議砍掉，或是 dev 下可見 V
10. 如果沒有格式化代碼工具建議代碼排版一下 V
11. 圖形所驗證碼連線生成建議用算的 <--有空再來算，不想算數學...
12. 引入 redux，寫了 store，卻沒使用，那就刪掉 V