App.Router.map(function () {
  // Add your routes here
  this.resource('about');
  this.resource('services', function(){
	  this.resource('service', { path: ':service_id' });
  });
  this.resource('contact');
});

App.ServicesRoute = Ember.Route.extend({
	model: function() {
		return services;
	}
});

App.ServiceRoute = Ember.Route.extend({
	model: function(params) {
		return services.findBy('id', params.service_id);
	}
});

// Using markdown to style the 'summary' information
var services = [{
	id: 'services',
	linkTitle: 'Services',
	title: 'Our core service offering consists of:',
	summary: '**Discretionary Asset Management:**\
	<p>After defining a long-term investment policy, the clients grant Mori Huston Partners the mandate to make the investment decisions on their behalf, without prior consent. The clients are updated regularly on the performance and the composition of the portfolio. Every portfolio is tailor made.</p>\
	<p>**Investment Advisory Services:** After defining the client\'s investment objectives and risk profile, we constantly provide unbiased advice on how to achieve the individual investment goals. The ultimate decision on each investment lies with the client. We instruct the banks.</p>  \
	<p>**Family Office Services:** To meet the sophisticated needs of families with significant assets, Mori Huston Partners offers value-added services to help:</p>  \
	<ul class="cleaner-list"><li> Coordinate and consolidate all investment activities</li>  \
	<li>Consolidate reporting on all assets and liabilities</li>  \
	<li>Facilitate multigenerational wealth planning</li></ul>'
}, {
	id: 'investment-management',
	linkTitle: 'Investment Management',
	title: 'Our Investment Philosophy:',
	summary: '<ul class="cleaner-list"><li>We seek to understand the client, to align with the client\'s interests, and to keep an independent mind</li><li>Our primary responsibility is the preservation of the client\'s capital, while striving to achieve attractive long-term inflation adjusted returns.</li><li>Asset allocation and risk management is at the heart of our investment process. We look for value and respect the business cycle.</li><li>Our strategy builds on the fact that, in any given market environment, there are undervalued asset classes or sectors which are poised to outperform.</li><li>Active allocation between asset classes and sectors is an important strategy in an environment where no single area is likely to continually dominate, and where returns should be moderate over a protracted period of time.</li><li>When judging any investment on its merits, we focus on its intrinsic value, and always look for a reasonable margin of safety.</li></ul>'
}, {
	id: 'investment-process',
	linkTitle: 'Investment Process',
	title: 'Our client is at the heart of our investment process',
	summary: '**And we mean that literally.**\
	<p>We take the time to listen and understand. We start with a carefully thought through, highly individualized and well-documented long-term investment policy. It will be developed closely with the respective investor to ensure representation, association, and an ability to stick to it over long periods of time. It will also help the client to make the really hard decisions in moments of crisis or exuberance. While the investment policy will provide the guiding light for long-term investment success, it should also be organic and will change as circumstances change.</p>\
	<p>**Investment Goals:** Part of the investment policy setting process is a thorough discussion on the financial goals of the client. These goals could be of personal, family, philanthropic, or of other nature. Most of these goals are competing against each other, and it is therefore important to prioritize and dollar-weigh them accordingly.</p>  \
	<p>**Risk Preferences:** We seek to find each investor’s individual risk preferences through a risk profiling process which incorporates the latest research in behavioral finance. Traditional finance wants us to be totally rational, but we remain human and don’t act according to theory. Most financial institutions use standard deviation as the unique risk factor driving an investor’s decision under uncertainty. However, this measure suggests that individuals weigh negative returns equally to positive returns, which is far from reality. While standard deviation is certainly helpful as a risk measure, we believe it can only be part of an overall more intuitive and realistic risk management toolkit. </p>  \
	<p>**Long Term Policy Allocation:** The long-term allocation policy sets the overall portfolio risk limits, and ensures the realization of long-term investment goals. The decision on the maximum amount of capital allocated to growth (= higher risk) and capital preservation (=lower risk) strategies lies at the heart of this policy setting process.This policy allocation provides the framework within which we actively allocate depending on the attractiveness of each asset class, or instrument (see Active Asset Allocation). </p>  \
	<p>**Expectations and Governance:** To us it is of critical importance to engage the client in the investment process. Only this way will we be able to find out how the client really feels about portfolio diversification, volatility, capital loss, specific asset classes or liquidity. Engagement also means offering education on investment issues, and creating realistic risk and return expectations. We want to provide the client with a sense of ownership in the investment process, as we believe strong and informed governance on the client’s part is an essential ingredient for a successful long-term relationship. </p>  \
	<p>**Monitoring and Review:** A review of the investment policy and monitoring of the portfolio performance are critical. Portfolios need at a regular checkup to review the policy objectives and their implementation over the previous year. If the objectives are no longer appropriate, then they need to be changed. </p> '
}, {
	id: 'assetallocation',
	linkTitle: 'Active Asset Allocation',
	title: 'Active Asset Allocation',
	summary: '<p>The investment policy sets the long-term policy allocation. Within this policy framework we are able to implement our <strong>active asset allocation</strong>. In forming return expectations for asset classes we use a combination of risk premium, intrinsic value, and global macroeconomic analysis. Our risk premium analysis is highly influenced by our views on economic growth. We evaluate the long-term growth potential of the global economies, their political risks, and demographic trends as well as structural changes within economies, and for the global economy as a whole. This is especially important in times of seismic shifts in the global political and economic landscape. Combining all these different parts, we get a good view of the intrinsic value of each asset class, and how this compares to the value currently offered in the market place.</p> \
	<p>While diversification is an important aspect in our investment process, <strong>we will only invest in an asset class, if our analysis tells us that the prospective return premiums are sufficient relative to the respective risks.</strong> Finance theory says that higher expected risk means higher expected return. We believe it doesn’t always work that way. What if the equity risk premium over bonds is negative and therefore the available long-term returns from bonds are higher than the ones available from equities. Why should an investor have any substantial investment in equities in such a situation? This is an important part in our investment process as our bets relative to the benchmark can be substantial, if we believe that equity markets are overvalued. We consider this flexibility to be an important factor in our ability to add value, and protect the client’s capital throughout different market environments. <strong>When market prices of various assets, securities, currencies, industries, or countries move away from their intrinsic value, that is the time when we want to take positions in our portfolios.</strong></p>'
}, {
	id: 'investment-selection',
	linkTitle: 'Investment Selection',
	title: 'Manager Selection',
	summary: '<ul class="cleaner-list"> \
	<li>We look for managers who share our investment philosophy and offer long-term added value to our clients.</li>\
	<li>MHP conducts a review on every manager who is added to a client portfolio. We also consider manager analysis of third parties, if they meet our quality criteria. In certain cases we also interview the managers personally.</li>\
	<li>Our methodology focuses on gaining an understanding of the fund\'s investment process, the strategy\'s risk and return drivers, as well as the manager\'s objectives and philosophies. We predominantly apply qualitative criteria as opposed to quantitative criteria.</li>\
	<li>We avoid funds with an excessive use of leverage or difficult to understand („black box“) strategies.</li>\
	<li>Once included on the MHP platform, funds and managers are monitored on a regular basis.</li>\
	</ul> \
	<h4>Instrument Selection</h4> \
	<p>Our equities and bond selection is also driven by our quest for value. We use our own as well as third party research.</p> \
	<p>Equities</p> \
	<ul class="cleaner-list"> \
	<li>We analyze the long-term earnings power of companies, independent of economic cycles.</li> \
	<li>We evaluate a company’s competitive position.</li> \
	<li>We look for attractive industries from a secular as well as cyclical perspective.</li> \
	</ul> \
	<p>Bonds</p> \
	<ul class="cleaner-list"> \
	<li>We evaluate the fiscal position of sovereign issuers, and the ability of corporations to cover their interest payments.</li> \
	<li>We look at relative attractiveness of credit risk premiums paid by comparable issuers.</li> \
	<li>We advice on duration and credit quality exposure, and check the liquidity for each bond.</li> \
	</ul>'
}];

