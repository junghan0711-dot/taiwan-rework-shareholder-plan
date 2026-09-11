import {
  ArrowDownRight,
  ArrowRight,
  GraduationCap,
  Leaf,
  ShieldCheck,
  Sprout,
  Truck,
} from 'lucide-react';

const months = [
  { label: '26.10', cash: 3560, revenue: 0, spend: 1440, phase: '建置' },
  { label: '11', cash: 3327, revenue: 0, spend: 233, phase: '建置' },
  { label: '12', cash: 3093, revenue: 0, spend: 233, phase: '建置' },
  { label: '27.01', cash: 2927, revenue: 120, spend: 286, phase: '試營運' },
  { label: '02', cash: 2783, revenue: 150, spend: 294, phase: '試營運' },
  { label: '03', cash: 2648, revenue: 160, spend: 294, phase: '試營運' },
  { label: '04', cash: 2594, revenue: 270, spend: 324, phase: '試營運' },
  { label: '05', cash: 2480, revenue: 180, spend: 294, phase: '試營運' },
  { label: '06', cash: 2375, revenue: 190, spend: 294, phase: '試營運' },
  { label: '07', cash: 2351, revenue: 300, spend: 324, phase: '試營運' },
  { label: '08', cash: 2279, revenue: 230, spend: 302, phase: '成長' },
  { label: '09', cash: 2216, revenue: 240, spend: 302, phase: '成長' },
  { label: '10', cash: 2234, revenue: 350, spend: 332, phase: '成長' },
  { label: '11', cash: 2192, revenue: 260, spend: 302, phase: '成長' },
  { label: '12', cash: 2159, revenue: 270, spend: 302, phase: '成長' },
];

const stages = [
  { step: '01', name: '建置期', period: '2026.10—12', months: '3 個月', revenue: '0', spend: '190.7', result: '-190.7', cash: '309.3', objective: '完成場域、廁所、堆肥設備與生產團隊進場。', tone: 'build' },
  { step: '02', name: '試營運期', period: '2027.01—07', months: '7 個月', revenue: '137.0', spend: '211.2', result: '-74.2', cash: '235.1', objective: '驗證清運客戶、蔬菜月增與每季課程的實際需求。', tone: 'trial' },
  { step: '03', name: '營運成長期', period: '2027.08—12', months: '5 個月', revenue: '135.0', spend: '154.2', result: '-19.2', cash: '215.9', objective: '縮小月度虧損，讓成熟收入引擎接近損益兩平。', tone: 'growth' },
];

const units = [
  { code: 'C01', name: '清運／堆肥', revenue: '56萬', cost: '126.4萬', result: '-70.4萬', tone: 'negative' },
  { code: 'C02', name: '有機蔬菜', revenue: '186萬', cost: '88.7萬', result: '+97.3萬', tone: 'positive' },
  { code: 'C03', name: '非營收支援', revenue: '—', cost: '70萬', result: '-70萬', tone: 'negative' },
  { code: 'C04', name: '課程教學', revenue: '30萬', cost: '89萬', result: '-59萬', tone: 'negative' },
];

const incomeDetails = [
  { source: '有機蔬菜銷售', basis: '2027年1月10萬起，每月增加1萬', amount: '186萬元', share: '68.4%' },
  { source: '清運服務運輸', basis: '每車次／客戶月2萬元', amount: '56萬元', share: '20.6%' },
  { source: '自然農法課程', basis: '每季10萬元；4月、7月、10月各一期', amount: '30萬元', share: '11.0%' },
];

const costDetails = [
  { group: '共同人力', item: '管理者、財務各2萬元／月；農場與堆肥作業員2人各4.5萬元／月', timing: '2026.11起', amount: '182萬元', value: 182 },
  { group: '建置投入', item: '食農教育場域及廁所80萬＋堆肥設備與建構50萬＋園區安全建置10萬', timing: '建置期', amount: '140萬元', value: 140 },
  { group: '農場營運', item: '水電與農業生產5萬元／月＋農場年租16萬元按月攤提', timing: '2026.11起', amount: '88.7萬元', value: 88.7 },
  { group: '護生園區', item: '飼料、照護、醫療及園區維護合計4萬元／月', timing: '全期', amount: '60萬元', value: 60 },
  { group: '清運營運', item: '處理合作、車輛油資與安全耗材合計4.5萬元／月', timing: '2027.01起', amount: '54萬元', value: 54 },
  { group: '清運直接成本', item: '每車次／客戶月0.8萬元，隨服務量變動', timing: '隨收入', amount: '22.4萬元', value: 22.4 },
  { group: '課程直接成本', item: '講師、教材、活動保險與接待合計3萬元／季', timing: '4月、7月、10月', amount: '9萬元', value: 9 },
];

const cashLabel = (value: number) => `${(value / 10).toLocaleString('zh-TW')}萬`;

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="頁面導覽">
        <a className="brand" href="#top" aria-label="台灣再沃首頁">
          <span className="brand-mark"><Leaf size={18} strokeWidth={2.4} /></span>
          <span>台灣再沃</span>
        </a>
        <div className="nav-links">
          <a href="#stages">階段分析</a>
          <a href="#overview">財務概況</a>
          <a href="#business">事業結構</a>
          <a href="#details">收支明細</a>
          <a href="#assumptions">規劃假設</a>
        </div>
        <span className="version-pill">股東版・2026.09</span>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">2026.10 — 2027.12 成立前營運規劃</p>
          <h1>把廢棄物，<br />變成下一輪生長。</h1>
          <p className="hero-lead">
            以清運與堆肥為起點，串聯有機蔬菜與自然農法教育，建立能被複製的地方循環經濟模式。
          </p>
          <div className="hero-meta">
            <span><ShieldCheck size={17} />啟動資金 500 萬元</span>
            <span>建置期至 2026 年 12 月</span>
          </div>
        </div>

        <div className="cycle-visual" aria-label="清運、農場與教育形成循環模式">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="cycle-center">
            <Sprout size={42} strokeWidth={1.5} />
            <strong>循環</strong>
            <span>再生價值</span>
          </div>
          <div className="cycle-node node-one"><Truck size={20} /><span>清運</span></div>
          <div className="cycle-node node-two"><Leaf size={20} /><span>農場</span></div>
          <div className="cycle-node node-three"><GraduationCap size={20} /><span>教育</span></div>
        </div>
      </section>

      <section className="section stage-section" id="stages">
        <div className="section-heading">
          <div><p className="eyebrow">三階段營運路徑</p><h2>從建置投入，走向營運驗證。</h2></div>
          <p>每一階段都有明確任務與財務門檻；金額單位均為萬元。</p>
        </div>
        <div className="stage-grid">
          {stages.map((stage) => (
            <article className={`stage-card ${stage.tone}`} key={stage.step}>
              <div className="stage-top"><span>{stage.step}</span><b>{stage.months}</b></div>
              <p className="stage-period">{stage.period}</p><h3>{stage.name}</h3><p>{stage.objective}</p>
              <dl><div><dt>收入</dt><dd>{stage.revenue}</dd></div><div><dt>支出</dt><dd>{stage.spend}</dd></div><div><dt>損益</dt><dd>{stage.result}</dd></div><div><dt>期末現金</dt><dd>{stage.cash}</dd></div></dl>
            </article>
          ))}
        </div>
      </section>

      <section className="section monthly-section" aria-labelledby="monthly-title">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow">月度收支走勢</p><h2 id="monthly-title">成長期，收支缺口明顯收斂。</h2></div>
          <p>2027 年 10 月因季度課程入帳，單月首度出現約 1.8 萬元正數。</p>
        </div>
        <figure className="monthly-chart" aria-label="2026年10月至2027年12月每月收入與支出比較圖">
          <div className="monthly-legend"><span><i className="income-dot" />收入</span><span><i className="spend-dot" />支出</span></div>
          <div className="monthly-bars">
            {months.map((month, index) => (
              <div className={`month-column phase-${month.phase}`} key={`${month.label}-${index}`}>
                <div className="month-pair"><i className="income-bar" style={{height:`${Math.max(2, month.revenue / 4.2)}%`}} /><i className="spend-bar" style={{height:`${Math.max(2, month.spend / 15)}%`}} /></div>
                <span>{month.label}</span>
              </div>
            ))}
          </div>
          <div className="phase-axis"><span>建置期</span><span>試營運期</span><span>營運成長期</span></div>
        </figure>
      </section>

      <section className="section" id="overview">
        <div className="section-heading">
          <div>
            <p className="eyebrow">規劃期資金全貌</p>
            <h2>先守住現金，再讓營收成長。</h2>
          </div>
          <p>規劃期共 15 個月，涵蓋建置、試營運與營運成長三階段。</p>
        </div>

        <div className="metrics-grid">
          <article className="metric-card accent-card">
            <span>規劃期收入</span>
            <strong>272<small>萬元</small></strong>
            <p>蔬菜收入占整體 68%</p>
          </article>
          <article className="metric-card">
            <span>規劃期支出</span>
            <strong>556.1<small>萬元</small></strong>
            <p>含建置與一次性設備支出</p>
          </article>
          <article className="metric-card warning-card">
            <span>營運結果</span>
            <strong>-284.1<small>萬元</small></strong>
            <p><ArrowDownRight size={16} />成立初期預期投入</p>
          </article>
          <article className="metric-card reserve-card">
            <span>期末現金</span>
            <strong>215.9<small>萬元</small></strong>
            <p>高於保留額 15.9 萬元</p>
          </article>
        </div>

        <article className="cash-panel">
          <div className="panel-copy">
            <p className="eyebrow light">現金水位</p>
            <h3>規劃期後仍保有<br /><em>26.4 個月</em>資金支應能力</h3>
            <p>依目前平均淨耗用推估，2027 年 12 月期末現金為 215.9 萬元，仍高於 200 萬元最低保留額。</p>
            <div className="reserve-key"><i />最低保留額 200 萬元</div>
          </div>

          <figure className="cash-chart" aria-label="2026年10月至2027年12月期末現金水位，由356萬元降至215.9萬元">
            <div className="chart-scale"><span>500萬</span><span>350萬</span><span>200萬</span></div>
            <div className="reserve-line"><span>保留線</span></div>
            <div className="bars">
              {months.map((month, index) => (
                <div className="bar-wrap" key={`${month.label}-${index}`}>
                  <span className={`milestone ${month.label === '10' && month.phase === '成長' ? 'show' : ''}`}>轉正</span>
                  <div className="bar" style={{ height: `${Math.max(30, month.cash / 12)}px` }}>
                    <span className="bar-value">{cashLabel(month.cash)}</span>
                  </div>
                  <span className="bar-label">{month.label}</span>
                </div>
              ))}
            </div>
          </figure>
        </article>
      </section>

      <section className="section split-section" id="business">
        <div className="business-intro">
          <p className="eyebrow">三股收入引擎</p>
          <h2>從單一生產，走向循環服務。</h2>
          <p>蔬菜是首年最明確的正向貢獻來源；清運與課程則需要隨客戶量與開課規模逐步放大。</p>
          <div className="engine-stack" aria-label="三項收入來源">
            <div><Truck /><span><b>清運服務</b><small>56 萬元</small></span></div>
            <div><Leaf /><span><b>有機蔬菜</b><small>186 萬元</small></span></div>
            <div><GraduationCap /><span><b>自然農法課程</b><small>30 萬元</small></span></div>
          </div>
          <div className="course-economics">
            <span>每季課程單位經濟</span>
            <div><b>收入 10萬</b><i>−</i><b>成本 3萬</b><i>=</i><strong>毛利 7萬</strong></div>
            <small>單季毛利率 70%；場域建置費另列。</small>
          </div>
        </div>

        <div className="unit-table" aria-label="各事業單位規劃期損益">
          <div className="unit-row table-head">
            <span>事業單位</span><span>收入</span><span>成本</span><span>貢獻</span>
          </div>
          {units.map((unit) => (
            <div className="unit-row" key={unit.code}>
              <span><i>{unit.code}</i>{unit.name}</span>
              <span>{unit.revenue}</span>
              <span>{unit.cost}</span>
              <strong className={unit.tone}>{unit.result}</strong>
            </div>
          ))}
          <p className="table-note">另有共同人力與管理費用 182 萬元，未歸屬至單一事業。</p>
        </div>
      </section>

      <section className="detail-section" id="details">
        <div className="detail-shell">
          <div className="section-heading detail-heading">
            <div>
              <p className="eyebrow light">收支來源拆解</p>
              <h2>錢從哪裡來，<br />又花到哪裡去。</h2>
            </div>
            <p>收入依產品與服務拆分；支出則區分人力、建置、固定營運及隨收入變動的直接成本。</p>
          </div>

          <div className="detail-grid">
            <article className="detail-card income-card">
              <div className="detail-card-head">
                <span>收入來源</span><strong>272萬元</strong>
              </div>
              <div className="income-visual"><div className="income-donut" aria-label="有機蔬菜68.4%，清運20.6%，課程11%"><span>收入<br/><b>272萬</b></span></div></div>
              <div className="source-bar" aria-hidden="true">
                <i style={{ width: '68.4%' }} /><i style={{ width: '20.6%' }} /><i style={{ width: '11%' }} />
              </div>
              {incomeDetails.map((row) => (
                <div className="detail-row income-row" key={row.source}>
                  <span><b>{row.source}</b><small>{row.basis}</small></span>
                  <span>{row.share}</span>
                  <strong>{row.amount}</strong>
                </div>
              ))}
            </article>

            <article className="detail-card cost-card">
              <div className="detail-card-head">
                <span>成本支出</span><strong>556.1萬元</strong>
              </div>
              {costDetails.map((row) => (
                <div className="detail-row cost-row" key={row.group}>
                  <span><b>{row.group}</b><small>{row.item}</small></span>
                  <span>{row.timing}</span>
                  <strong><i className="cost-mini" style={{width:`${row.value / 1.82}%`}} />{row.amount}</strong>
                </div>
              ))}
              <p className="detail-footnote">以上金額合計約 556.1 萬元；四捨五入可能產生尾差。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="assumptions">
        <div className="section-heading assumptions-head">
          <div>
            <p className="eyebrow">模型關鍵假設</p>
            <h2>每個數字，都有時間軸。</h2>
          </div>
          <p>股東可由這些假設快速判讀資金需求與營收成長路徑。</p>
        </div>

        <div className="timeline">
          <article>
            <span className="timeline-date">2026.10</span>
            <h3>場域與設備建置</h3>
            <p>食農教育場域及廁所 80 萬元；廚餘堆肥設備與建構 50 萬元。</p>
          </article>
          <article>
            <span className="timeline-date">2026.11</span>
            <h3>生產團隊進場</h3>
            <p>四人每月人力 13 萬元，生產水電 5 萬元；年租 16 萬元按月攤提。</p>
          </article>
          <article>
            <span className="timeline-date">2027.01</span>
            <h3>蔬菜開始收成</h3>
            <p>首月收入目標 10 萬元，其後每月增加 1 萬元，12 月達 21 萬元。</p>
          </article>
          <article>
            <span className="timeline-date">2027.04</span>
            <h3>自然農法課程啟動</h3>
            <p>每季收入10萬元、直接成本3萬元；本期認列4月、7月與10月三季。</p>
          </article>
        </div>
      </section>

      <section className="decision-section">
        <div>
          <p className="eyebrow light">股東判讀重點</p>
          <h2>規劃期先驗證收入引擎，<br />再把成長變成獲利。</h2>
        </div>
        <div className="decision-list">
          <p><span>01</span><span>蔬菜事業預計貢獻 <b>+97.3 萬元</b>，是目前最清楚的基本盤。</span></p>
          <p><span>02</span><span>成長期虧損縮至 <b>19.2 萬元</b>，但年底安全緩衝僅 15.9 萬元。</span></p>
          <p><span>03</span><span>課程單季毛利 <b>7 萬元</b>；下一步應優先驗證清運客戶量與收費。</span></p>
        </div>
      </section>

      <footer>
        <div className="brand"><span className="brand-mark"><Leaf size={18} /></span><span>台灣再沃</span></div>
        <p>本頁為成立前營運規劃，數據係依目前假設推估，非財務保證。規劃期間：2026 年 10 月至 2027 年 12 月。</p>
        <a href="#top">回到頂端 <ArrowRight size={15} /></a>
      </footer>
    </main>
  );
}
