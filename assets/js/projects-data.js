/* Add only public links you have permission to share. Empty URLs are intentionally not guessed. */
window.PORTFOLIO_PROJECTS = [
  {
    id:'product-self-service', number:'01', title:'Self-service access & enablement', category:'product', categoryLabel:'Product & CX', monogram:'UX', visualBg:'#253020', visualFg:'#d4f36a',
    summary:'A product enhancement shaped around recurring client friction: make access and training easier to discover so users can resolve common needs without opening support tickets.',
    problem:'Repeated access and user-education questions were creating avoidable support demand across the client base.',
    approach:'Collected recurring production patterns, translated customer pain points into a structured enhancement proposal, aligned requirements with product and engineering, and supported testing, rollout, and adoption.',
    outcome:'Client tickets reduced by 20% across the combined client base after the self-service enhancement.',
    role:'Customer discovery, requirement translation, PRD contribution, cross-functional coordination, testing and adoption follow-through.',
    technologies:['Product discovery','PRDs','Customer feedback','Enablement','UAT'], links:{documentation:'',website:'',source:''},
    search:'self service self-service access onboarding user education training product discovery client support tickets twenty percent reduction discoverability'
  },
  {
    id:'ai-hiring-workflow', number:'02', title:'AI-assisted hiring workflow', category:'ai-data', categoryLabel:'AI & Data', monogram:'AI', visualBg:'#25213b', visualFg:'#c9baff',
    summary:'An internal hackathon workflow that parsed resumes, compared candidates against hiring demand, and helped recommend internal allocation versus external hiring paths.',
    problem:'Matching candidate profiles to open roles and deciding between internal allocation and external hiring required repetitive manual review and follow-up.',
    approach:'Built a workflow with Python, JavaScript, and n8n to parse resumes, compare them with job descriptions, produce fit scores with concise reasoning, recommend next steps, and automate email updates.',
    outcome:'The project team was selected as one of the winning teams in the internal hackathon.',
    role:'Workflow design and implementation across resume parsing, matching logic, recommendations, and automated communication.',
    technologies:['Python','JavaScript','n8n','AI-assisted matching','Workflow automation'], links:{documentation:'',website:'',source:''},
    search:'artificial intelligence recruiting resume parsing candidate hiring job description jd fit score talent matching internal allocation external recruitment email automation hackathon'
  },
  {
    id:'transaction-reconciliation', number:'03', title:'Failed transaction reconciliation', category:'automation', categoryLabel:'Automation', monogram:'ETL', visualBg:'#1d303b', visualFg:'#a7d9f5',
    summary:'A Python ETL workflow connecting Oracle data with Kubernetes workloads to reconcile failed financial and UPI transactions.',
    problem:'Reconciliation involved a recurring manual process that consumed roughly 30 minutes per day.',
    approach:'Connected Oracle database records with Kubernetes cluster and pod workloads, then automated the identification and reconciliation of failed transactions.',
    outcome:'Eliminated the recurring manual reconciliation task of approximately 30 minutes per day.',
    role:'Backend automation, data flow implementation, integration, and operational validation.',
    technologies:['Python','ETL','Oracle SQL','Kubernetes','UPI','Automation'], links:{documentation:'',website:'',source:''},
    search:'payment payments financial upi failed transaction reconciliation retry data pipeline extract transform load oracle database kubernetes pods manual 30 minutes daily'
  },
  {
    id:'api-operations', number:'04', title:'Cross-system API automation', category:'platform', categoryLabel:'Platform & APIs', monogram:'API', visualBg:'#352820', visualFg:'#f2bd94',
    summary:'REST and SOAP APIs that automated database operations across Redis, Oracle, and SAP, including synchronization, retry handling, and user-profile updates.',
    problem:'Routine synchronization, failed-record retries, and profile updates were taking two to three combined team hours each day.',
    approach:'Built API-driven operations across Redis, Oracle, and SAP to make repetitive data tasks and recovery paths more consistent.',
    outcome:'Automated work that previously required 2–3 combined team hours daily.',
    role:'API development, integration, automation, and operational support.',
    technologies:['REST','SOAP','Redis','Oracle','SAP','JSON','XML'], links:{documentation:'',website:'',source:''},
    search:'application programming interface integrations endpoints rest soap redis oracle sap database sync synchronization retries retry failed records user profile updates two three hours'
  },
  {
    id:'workload-aware-processing', number:'05', title:'Workload-aware transaction processing', category:'reliability', categoryLabel:'Reliability', monogram:'OPS', visualBg:'#202b24', visualFg:'#b8e4a3',
    summary:'A Kubernetes processing approach that routed transactions to dedicated pods based on workload effort and connectivity/cache needs.',
    problem:'Bulk transaction failures were being amplified by processing delays and timeouts, particularly when workload characteristics varied.',
    approach:'Designed workload-aware routing and processing, alongside recovery workflows that supported rollback, retry, queue expansion, threshold-based pod activation, and stakeholder alerts.',
    outcome:'Reduced bulk failures caused by delays and timeouts to below 10% system-wide and to about 1% for lower-workload transactions.',
    role:'Reliability workflow design, workload segmentation, automation, and production validation.',
    technologies:['Kubernetes','Python','Queues','Retries','Disaster recovery','Monitoring'], links:{documentation:'',website:'',source:''},
    search:'resilience reliability high availability failure errors timeout timeouts latency load balancing workload based transaction processing queue scaling pods kubernetes retry rollback 10 percent 1 percent'
  },
  {
    id:'cloud-migration', number:'06', title:'Cloud workflow migration', category:'reliability', categoryLabel:'Reliability', monogram:'CLD', visualBg:'#202b3b', visualFg:'#b6d0ff',
    summary:'Migration of SAP/AWS datasets and workflows to in-house cloud infrastructure, including database configuration rebuilds and legacy script rationalization.',
    problem:'Legacy data workflows needed to move to in-house infrastructure without disrupting customer-facing processing.',
    approach:'Rebuilt database configurations, migrated datasets and workflows, rationalized legacy scripts, and validated system behavior through the transition.',
    outcome:'Delivered 100% uptime with zero client/consumer issues and up to 10% faster processing on workloads exceeding 100K transactions per day on a single cluster.',
    role:'Migration coordination, workflow and database configuration, script cleanup, and reliability validation.',
    technologies:['SAP','AWS','Cloud migration','SQL','Workflow reliability','100K+ transactions/day'], links:{documentation:'',website:'',source:''},
    search:'cloud infrastructure migration aws sap in house data datasets scripts database configuration uptime zero downtime 100k transactions per day processing performance ten percent'
  },
  {
    id:'observability-automation', number:'07', title:'Production observability & reporting', category:'automation', categoryLabel:'Automation', monogram:'OBS', visualBg:'#332e20', visualFg:'#e9d78a',
    summary:'Operational dashboards and automated reports for traffic spikes, pod and cluster failures, event logging, and capacity behavior.',
    problem:'Production patterns and recurring reporting needed better visibility to help teams understand failures, traffic, and capacity trends.',
    approach:'Built anomaly-detection support and operational dashboards, automated traffic redistribution and scale actions, and scheduled 20+ recurring reports across multiple cadences.',
    outcome:'Automated more than 20 recurring system reports and improved the ability to analyze patterns and tune operational thresholds.',
    role:'Observability, reporting automation, operational analysis, and alert/scale workflow support.',
    technologies:['Python','Grafana','Metabase','Monitoring','Anomaly detection','Reporting'], links:{documentation:'',website:'',source:''},
    search:'metrics monitoring dashboard logs traffic spikes anomaly detection pod cluster failures capacity auto scaling scale out scale down redistribution daily weekly monthly annual reports 20'
  },
  {
    id:'computer-vision', number:'08', title:'Aircraft defect detection', category:'ai-data', categoryLabel:'AI & Data', monogram:'CV', visualBg:'#33252c', visualFg:'#f0b6c5',
    summary:'Image-data preparation and computer-vision model testing for AI-assisted aircraft defect detection during a data science internship.',
    problem:'Machine-learning applications required consistent, high-quality image datasets and model evaluation for defect detection.',
    approach:'Built and optimized Python ETL pipelines for image annotation, labeling, and manipulation, then automated and tested computer-vision models using OpenCV and Hugging Face frameworks.',
    outcome:'Achieved 90%+ accuracy in AI-driven aircraft defect detection.',
    role:'Image data preparation, annotation pipeline optimization, model automation, and testing.',
    technologies:['Python','OpenCV','Hugging Face','Computer vision','ETL','Machine learning'], links:{documentation:'',website:'',source:''},
    search:'data science image data annotation labeling manipulation aircraft airplane aviation defect damage detection computer vision machine learning model accuracy 90 percent'
  },
  {
    id:'product-adoption', number:'09', title:'Product adoption & customer feedback loop', category:'product', categoryLabel:'Product & CX', monogram:'CX', visualBg:'#25302f', visualFg:'#b5e5db',
    summary:'A customer enablement and product feedback loop combining recorded training, FAQ improvements, richer usage reporting, and structured enhancement proposals.',
    problem:'Users were missing platform capabilities and recurring education issues were creating support demand and weakening adoption visibility.',
    approach:'Delivered recorded enablement sessions, improved FAQs, surfaced product capabilities through a home-page Feed experience, and proposed user-action reporting to make platform usage more visible.',
    outcome:'User-education issues fell by more than 50% at at least three clients. Usage reporting also strengthened visibility into adoption for a major client.',
    role:'Customer enablement, feedback analysis, product enhancement proposals, adoption support, and post-launch iteration.',
    technologies:['Customer experience','Product adoption','Training','FAQs','Usage analytics','Stakeholder management'], links:{documentation:'',website:'',source:''},
    search:'customer experience client satisfaction user adoption education enablement training videos recorded 50 sessions faq feed usage analytics user action behavior reporting intelliprism feedback product improvement'
  }
];
