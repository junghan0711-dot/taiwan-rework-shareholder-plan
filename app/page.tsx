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
  { label: '26.10', cash: 3580, revenue: 0, spend: 1420, phase: '建置' },
  { label: '11', cash: 3363, revenue: 0, spend: 218, phase: '建置' },
  { label: '12', cash: 3145, revenue: 0, spend: 218, phase: '建置' },
  { label: '27.01', cash: 3052, revenue: 144, spend: 238, phase: '試營運' },
  { label: '02', cash: 2968, revenue: 154, spend: 238, phase: '試營運' },
  { label: '03', cash: 2895, revenue: 164, spend: 238, phase: '試營運' },
  { label: '04', cash: 2902, revenue: 274, spend: 268, phase: '試營運' },
  { label: '05', cash: 2848, revenue: 184, spend: 238, phase: '試營運' },
  { label: '06', cash: 2805, revenue: 194, spend: 238, phase: '試營運' },
  { label: '07', cash: 2842, revenue: 304, spend: 268, phase: '試營運' },
  { label: '08', cash: 2818, revenue: 214, spend: 238, phase: '成長' },
  { label: '09', cash: 2805, revenue: 224, spend: 238, phase: '成長' },
  { label: '10', cash: 2872, revenue: 334, spend: 268, phase: '成長' },
  { label: '11', cash: 2878, revenue: 244, spend: 238, phase: '成長' },
  { label: '12', cash: 2895, revenue: 254, spend: 238, phase: '成長' },
];

const stages = [
  { step: '01', name: '建置期', period: '2026.10—12', months: '3 個月', revenue: '0', spend: '185.5', result: '-185.5', cash: '314.5', objective: '完成場域、廁所、堆肥設備與生產團隊進場。', tone: 'build' },
  { step: '02', name: '試營運期', period: '2027.01—07', months: '7 個月', revenue: '141.9', spend: '172.3', result: '-30.3', cash: '284.2', objective: '分別驗證清運、堆肥、蔬菜與課程的實際需求。', tone: 'trial' },
  { step: '03', name: '營運成長期', period: '2027.08—12', months: '5 個月', revenue: '127.1', spend: '121.8', result: '+5.3', cash: '289.5', objective: '讓成熟收入引擎支應固定成本，維持階段獲利。', tone: 'growth' },
];

const units = [
  { code: 'C01', name: '清運服務', revenue: '24萬', cost: '12萬', result: '+12萬', tone: 'positive' },
  { code: 'C02', name: '農場／蔬菜', revenue: '191萬', cost: '94.5萬', result: '+96.5萬', tone: 'positive' },
  { code: 'C03', name: '非營收支援', revenue: '—', cost: '40萬', result: '-40萬', tone: 'negative' },
  { code: 'C04', name: '課程教學', revenue: '30萬', cost: '89萬', result: '-59萬', tone: 'negative' },
  { code: 'C05', name: '廚餘堆肥', revenue: '24萬', cost: '62萬', result: '-38萬', tone: 'negative' },
];

const incomeDetails = [
  { source: '有機蔬菜銷售', basis: '2027年1月10萬起，每月增加1萬', amount: '186萬元', share: '69.1%' },
  { source: '自然農法課程', basis: '每季10萬元；4月、7月、10月各一期', amount: '30萬元', share: '11.2%' },
  { source: '清運服務', basis: '2027年起每月收入2萬元粗估', amount: '24萬元', share: '8.9%' },
  { source: '堆肥販售與自用效益', basis: '2027年起每月效益2萬元粗估', amount: '24萬元', share: '8.9%' },
  { source: '農場土地分租', basis: '年收入5萬元，2027年按月平均認列', amount: '5萬元', share: '1.9%' },
];

const costDetails = [
  { group: '共同人力', item: '管理者、財務各2萬元／月；農場與堆肥作業員2人各4.5萬元／月', timing: '2026.11起', amount: '182萬元', value: 182 },
  { group: '建置投入', item: '食農教育場域及廁所80萬＋堆肥設備與建構50萬＋園區安全建置10萬', timing: '建置期', amount: '140萬元', value: 140 },
  { group: '農場營運', item: '水電與農業生產5萬元／月＋農場年租21萬元按月攤提', timing: '2026.11起', amount: '94.5萬元', value: 94.5 },
  { group: '護生園區', item: '飼料、照護、醫療及園區維護合計2萬元／月', timing: '全期', amount: '30萬元', value: 30 },
  { group: '清運營運', item: '處理、車輛油資與耗材先合併粗估1萬元／月', timing: '2027.01起', amount: '12萬元', value: 12 },
  { group: '堆肥製作', item: '廚餘堆肥製作成本粗估1萬元／月', timing: '2027.01起', amount: '12萬元', value: 12 },
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
          <p>2027 年 4 月因季度課程入帳首度轉正；成長期合計約獲利 5.3 萬元。</p>
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
            <strong>269<small>萬元</small></strong>
            <p>蔬菜收入占整體 69%</p>
          </article>
          <article className="metric-card">
            <span>規劃期支出</span>
            <strong>479.5<small>萬元</small></strong>
            <p>含建置與一次性設備支出</p>
          </article>
          <article className="metric-card warning-card">
            <span>營運結果</span>
            <strong>-210.5<small>萬元</small></strong>
            <p><ArrowDownRight size={16} />成立初期預期投入</p>
          </article>
          <article className="metric-card reserve-card">
            <span>期末現金</span>
            <strong>289.5<small>萬元</small></strong>
            <p>最低現金仍高於保留額 80.5 萬元</p>
          </article>
        </div>

        <article className="cash-panel">
          <div className="panel-copy">
            <p className="eyebrow light">現金水位</p>
            <h3>規劃期後仍保有<br /><em>35.6 個月</em>資金支應能力</h3>
            <p>依目前平均淨耗用推估，2027 年 12 月期末現金為 289.5 萬元；最低現金為 280.5 萬元。</p>
            <div className="reserve-key"><i />最低保留額 200 萬元</div>
          </div>

          <figure className="cash-chart" aria-label="2026年10月至2027年12月期末現金水位，由358萬元變化至289.5萬元">
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
          <p className="eyebrow">四股收入引擎</p>
          <h2>從單一生產，走向循環服務。</h2>
          <p>蔬菜是最主要的正向貢獻來源；清運與堆肥則先以每月各2萬元效益、1萬元成本驗證。</p>
          <div className="engine-stack" aria-label="四項主要收入來源">
            <div><Truck /><span><b>清運服務</b><small>24 萬元</small></span></div>
            <div><Sprout /><span><b>廚餘堆肥</b><small>24 萬元</small></span></div>
            <div><Leaf /><span><b>農場收入</b><small>191 萬元</small></span></div>
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
          <p className="table-note">堆肥成本含建置設備50萬元；其經常營運本身為每月收入／效益2萬元、成本1萬元。</p>
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
                <span>收入來源</span><strong>269萬元</strong>
              </div>
              <div className="income-visual"><div className="income-donut" aria-label="有機蔬菜69.1%，課程11.2%，清運8.9%，堆肥8.9%，土地分租1.9%"><span>收入<br/><b>269萬</b></span></div></div>
              <div className="source-bar" aria-hidden="true">
                <i style={{ width: '69.1%' }} /><i style={{ width: '11.2%' }} /><i style={{ width: '8.9%' }} /><i style={{ width: '8.9%' }} /><i style={{ width: '1.9%' }} />
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
                <span>成本支出</span><strong>479.5萬元</strong>
              </div>
              {costDetails.map((row) => (
                <div className="detail-row cost-row" key={row.group}>
                  <span><b>{row.group}</b><small>{row.item}</small></span>
                  <span>{row.timing}</span>
                  <strong><i className="cost-mini" style={{width:`${row.value / 1.82}%`}} />{row.amount}</strong>
                </div>
              ))}
              <p className="detail-footnote">以上金額合計約 479.5 萬元；四捨五入可能產生尾差。</p>
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
            <p>四人每月人力 13 萬元，生產水電 5 萬元；年租 21 萬元按月攤提。</p>
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
          <p><span>01</span><span>清運服務經常營運預計貢獻 <b>+12 萬元</b>，與堆肥分開追蹤。</span></p>
          <p><span>02</span><span>堆肥經常營運預計貢獻 <b>+12 萬元</b>；納入50萬元設備後，規劃期貢獻為負38萬元。</span></p>
          <p><span>03</span><span>成長期預計轉為 <b>+5.3 萬元</b>，但堆肥自用效益仍需用實際替代成本驗證。</span></p>
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
