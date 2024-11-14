@Library(value = "metamPipelineLibrary", changelog = false) _

// Please do not change the value of either Boolean below
final Boolean ENABLE_CONCURRENT_BUILDS = true
final Boolean DISABLE_CONCURRENT_BUILDS = false
// utilsBDD.createParamCron( "cron", [[@tags],[@tags]], Boolean concurrentBuilds, String auraName, Boolean sendNotification)

jobPlaywrightTest(
  name: "playwright",
  solutionBDDRun: false,
  auraName : "CEC",
  runPlaywrightTests: true,
  playwrightCrons: [
    // Jenkins timezone is UTC, so set cron timers accordingly
    // When updating a cron here, please manually trigger a run of the effected job in Jenkins so the new config is picked up
    // Use ENABLE_CONCURRENT_BUILDS or DISABLE_CONCURRENT_BUILDS to handle concurrent runs of the same cron
    "alpha": [
       utilsBDD.createParamCron(
        "00 0 * * *",
        [
          ["@EmailBasic1Set1-1", "@EmailBasic1Set2-1", "@EmailAdhoc2", "@EmailAutoResponse3", "@EmailDisclaimer4", "@EmailRona6-1", "@EmailSignature7", "@EmailPrerouting1", "@EmailTransfer9-2", "@EmailCJ10-1","@EmailFileTemplate12", "@EmailRealtime14-2", "@EmailACW-16", "@Emaili18n17-1", "@AsyncBasic1Set1-1", "@AsyncBasic1Set2", "@AsyncObserve3-1", "@AsyncCoach4", "@AsyncSDKTransfer2-1", "@AsyncURLTemplates8","@AsyncQTTemplate9", "@AsyncRealtime10", "@AsyncCJ11", "@AsyncFileTemplates12", "@EDFindEngagement4-2", "@AsyncBarge5-1", "@AsyncSDKCJ11", "@AsyncSDKAutoAnswer16", "@CustomMessagingBasic1Set1", "@customCRUDOperationSet1"],
          ["@EmailBasic1Set1-2", "@EmailBasic1Set2-2", "@ChatPrerouting1", "@EmailRona6-2", "@EmailTransfer9-1", "@EmailCJ10-2", "@EmailRealtime14-1", "@AsyncBasic1Set1-2", "@AsyncSDKBarge5-1", "@AsyncObserve3-2","@AsyncBarge5-2", "@EmailURL11", "@EmailTemplate8", "@AsyncSDKTransfer2-2", "@AdminCallback", "@AsyncACW6", "@AsyncACWPerQueue7", "@AdminOrchestration", "@AdminQueueThreshold", "@AdminServiceUser","@AdminUISearch", "@AdminUICheck-1", "@AuditTrailTimeTable2", "@AuditTrialBasic1", "@customCRUDOperationSet2", "@EDFindEngagement4-1", "@AAppsSanityBotCRUD1", "@AAppsSanityBotChat2"],
          ["@EmailBasic1Set2-3", "@AsyncBarge5-3", "@AsyncSDKTransfer2-3", "@AsyncSDKBarge5-2", "@AsyncSDKRona14", "@AdminUICheck-2", "@MessagingPreroutingWithIntegration1", "@AAppsBotUI3", "@AAppsChatBusinessStrategy5", "@AAppsChatSurvey6","@AAppsSanityChat4","@AAppsSSFUI7", "@AAppsSSFUIOperations11", "@AAppsSSFUIVariables8", "@AAppsSSFUIVariablesComplex10", "@AAppsSSFUIVariablesOutput9", "@AAppsSSFUIVariablesReadOnly12", "@Omni_Digital", "@EDGiveTreatment5", "@Notification", "@Metrics_API30","@BusinessHoursForQueues", "@ReatimeAPI10Set1", "@EmailQuickText5", "@AsyncSDKBasic1Set1", "@AsyncTransfer2"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false
      ),
      utilsBDD.createParamCron(
        "15 0 * * *",
        [
         ["@CustomerJourneyAPIs", "@HealthCheck", "@EDAuditTrailWorkflow1", "@TimeTables", "@UMR", "@ChatQuickTextTemplate9", "@Assisted", "@NGMBulkAgent", "@MSTeams1ToMany", "@MSTeamsChannelSearch", "@MSTeamsChat","@MSTeamsVeifyCapabilities", "@SyntheticSanity", "@ChatBasic1Set1", "@ChatTransfer2-1", "@ChatObserve3-2", "@ChatBarge5", "@ChatACW6", "@ChatACWPerQueue7-1", "@ChatTemplateURL8", "@ChatSDKReasonCode13", "@ChatRealtime10-3","@ChatCJ11-1", "@ChatReasonCode13", "@ChatRONA14-1", "@ChatSDKACW6-2", "@ChatSDKBasic1-1", "@ChatSDKBasic1Set2-1", "@ChatSDKBasic1Set3-1", "@ChatSDKTransfer2Set1-2"],
         ["@ChatTransfer2-2", "@ChatObserve3-1", "@ChatCoach4", "@ChatACWPerQueue7-2", "@ChatRealtime10-2", "@ChatRealtime10-5", "@ChatCJ11-2", "@ChatRONA14-2", "@ChatSDKBasic1Set2-2", "@ChatSDKBasic1Set3-2","@ChatSDKTransfer2Set1-1", "@ChatSDKObserve3Set1-1", "@ChatSDKObserve3Set2-2", "@ChatSDKCoach4", "@ChatSDKBarge5-1", "@ChatSDKACW6-1", "@ChatForcedLogout15", "@ChatSDKACWPerQueue7_Set1-2","@ChatSDKTemplateURL8", "@ChatSDKQuickTextTemplate9", "@ChatSDKRealtime10Set1-2", "@ChatSDKRealtime10Set2-2", "@ChatSDKCJ11-1", "@ChatSDKRona-2","@ChatSDKTransfer2Set2-2"],
         ["@ChatObserve3-3", "@ChatRealtime10-1", "@ChatRealtime10-4", "@ChatRealtime10Set3", "@ChatSDKBasic1-2", "@ChatSDKTransfer2Set2-1", "@ChatSDKObserve3Set1-2", "@ChatSDKObserve3Set2-1", "@ChatSDKBarge5-2", "@ChatSDKACWRealtime6","@ChatSDKACWPerQueue7_Set2-2", "@ChatSDKRealtime10Set1-1", "@ChatSDKRealtime10Set2-1", "@ChatSDKCJ11-2", "@ChatSDKRona-1","@TimezoneAPI","@RealtimeAPI_MeasureProducer"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false,  // enabling notifications
        true // enabling retry
      ),
      utilsBDD.createParamCron(
        "30 0 * * *",
        [
         ["@VoiceRona5_SalesSpanish", "@VoiceLogout6_SalesFrench", "@VoiceRealtime7_Automation-English-2", "@VoiceMidCall10_SalesHindi", "@VoiceOutbound12_SalesSupport", "@VoiceSingleStepTransfer16_Billing-English", "@VoiceSingleStepTransfer16_Billing-French", "@VoiceSingleStepTransfer16_Billing-Spanish", "@VoiceAgentToAgent19_Irish-2", "@AXPCHybridVoice20", "@KarisEmergencyCall22","@VoiceOmni_Support-Spanish-3", "@VoiceRealtimeConsult7_Consult_Portuguese_Set1", "@VoiceRealtimeConsult7_Consult_German_Set1", "@VoiceRealtimeConsult7_Consult_Vietnamese_Set2", "@VoiceRealtime7_Automation-Spanish-1", "@Voice-RestoreMedia-Sales21-Vietnamese", "@VoiceIncomingCall11_SupportEnglish", "@VoiceCoach3_Coach-English"],
         ["@VoiceConsultConference14_Consult-English", "@VoiceCoach3_Coach-Japanese", "@VoiceRealtimeConsult7_Consult_Portuguese_Set2", "@VoiceRealtimeConsult7_Consult_German_Set2", "@VoiceBarge4_Barge-English","@VoiceRealtime7_Automation-English-1", "@VoiceRealtime7_Automation-Spanish-3", "@VoiceOmni_Support-Spanish-1", "@BVRWSValidation2-1", "@VoiceObserve2_Observe-English","@VoiceObserve2_Observe-Spanish", "@VoiceCoach3_Coach-French", "@VoiceConsultConference14_Consult-French", "@VoiceConsultConference14_Consult-Japanese", "@VoiceConsultConference14_Consult-Spanish", "@VoiceCoach3_Coach-Spanish", "@VoiceRealtimeConsult7_Consult_Vietnamese_Set1", "@VoiceBarge4_Barge-Spanish"],
         ["@VoiceRealtime7_Automation-Spanish-2", "@OmniCreateDataOnAccount", "@VoiceBarge4_Barge-Japenese", "@VoiceCoach3BrowserRefresh_Coach-Hindi", "@VoiceObserve2BrowserRefresh_Observe-French", "@BVRWSValidation2-2","@VoiceRealtime7_Automation-English-3","@VoiceAgentToAgent19_Irish-1","@VoiceOmni_Support-Spanish-2"],
         ["@VoiceConsultTransfer15_Consult-Hindi"],
         ["@VoiceConsultTransfer15_Consult-Irish"],
         ["@VoiceBasic1Set1_SalesEnglish"],
         ["@VoiceUC3RealtimeConsultTransfer_Billing"],
         ["@VoiceRealtime7_Automation-French-3","@VoiceAutoAnswer9_SalesJapanese"],
         ["@VoiceRealtime7_Automation-French-2"],
         ["@VoiceRealtime7_Automation-French-1"],
         ["@VoiceRealtime7_Automation-French-4"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false
      ),
      utilsBDD.createParamCron(
        "45 0 * * *",
        [
         ["@EmailScreenPop15", "@ChatScreenPopSDK15", "@AsyncScreenPopSDK15"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false
      ),
      utilsBDD.createParamCron(
        "00 5 * * *",
        [
         ["HistoricalRealtimeAPI10", "@HistoricalOutBoundCall12", "@HistoricalAgentLogin", "@HistoricalAPI-ChatBasic1", "@HistoricalAPI-ChatTransfer2", "@HistoricalAPI-ChatCoach4", "@HistoricalAPI-ChatBarge5", "@HistoricalAPI-ChatReasonCode13","@HistoricalAPI-ChatRONA14", "@HistoricalEmailBasic", "@HistoricalAPI-ChatACW6", "@HistoricalAPI-ChatRONA14", "@DossierAgentByDispositionCode1", "@ReportSupervisorMonitoringSummary", "@Historical_DashboardLoginLogOut", "@HistoricalRealtimeVoicePriority7" ],
         ["@HistoricalVoiceVoiceAutoAnswer9", "@HistoricalUC3BasicSet1","@Contact_Detail_Report", "@HistoricalUC3BasicSet1","@DossierContactDetailSummary5-2", "@ReportEmergencyReport", "@DossierAgentPerformanceSummary11", "@DossierAgentNotReadyByReasonCodeReport", "@ReportAgentConfiguration","@DossierAgentLoginLogOut2", "@DossierAgentPerformanceSummary3", "@DossierCallBackDetailSummary4", "@DossierContactDetailSummary5-1", "@ReportAgentPerformanceByChannel", "@ReportAgentPerformance", "@ReportQueuePerformanceReport", "@DossierQueuePerformanceByChannel6", "@HistoricalAPI-ChatSDKBasic1" ],
         ["@RTAnalytics_Basic","@RTAnalytics_RonaScenario", "@RTAnalytics_AbdAlerting", "@RTAnalytics_AbdQueue", "@RTAnalytics_TransferUserQueue", "@RTAnalytics_CoachBarge", "@RT_ReasonCode" ],
         ["@AnalyticsHistorical_API", "@HistoricalAPI_TestValues","@HistoricalAPI-AsyncBarge5","@HistoricalVoiceConsultTransfer","@ReportContactDetailReport_1","@ReportContactDetailReport_2","@ReportContactDetailReport_3"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false
      ),
       utilsBDD.createParamCron(
        "15 17 * * *",
        [
            ["@OTTConfig",],
            ["@OTTConfigPune",],
            ["@OTTBrowserResiliency", "@OTTServiceObserve", "@OTTBasicCall", "@OTTLoginExp", "@OTTMidcall", "@OTTOtherCallExp1", "@OTTOtherCallExp2", "@OTTSingleStepTransfer", "@OTTAADSSearch",],
        ],
        ENABLE_CONCURRENT_BUILDS,
        "auraName=PUNE10",
        false
        ),
    ],

    "alpha-daily": [
      utilsBDD.createParamCron(
        "H/15 * * * *",
        [
          ["@ZDTSDKSanityAsyncTest","@ZDTSanityEmailTestIred", "@ZDTSanityChatTest", "@ZDTSanityChatSDKTest","@ZDTSanityOutboundVoice","@ZDTRealtimeUIChatSanity","@ZDTOTTSanityAXPCHybridVoice", "@ZDTSanityVoiceUC3Test", "@ZDTVoiceUC3HoldUnholdSales"]
        ],
        DISABLE_CONCURRENT_BUILDS,
        "auraName=PUNE10",
        true,  // enabling notifications
        true // enabling retry
      ),
    ],

    "qa": [
      utilsBDD.createParamCron(
        "00 0 * * *",
        [
          ["@EmailBasic1Set1-1", "@EmailBasic1Set2-1", "@EmailAdhoc2", "@EmailAutoResponse3", "@EmailDisclaimer4", "@EmailRona6-1", "@EmailSignature7", "@EmailPrerouting1", "@EmailTransfer9-2", "@EmailCJ10-1","@EmailFileTemplate12", "@EmailRealtime14-2", "@EmailACW-16", "@Emaili18n17-1", "@AsyncBasic1Set1-1", "@AsyncBasic1Set2", "@AsyncObserve3-1", "@AsyncCoach4", "@AsyncSDKTransfer2-1", "@AsyncURLTemplates8","@AsyncQTTemplate9", "@AsyncRealtime10", "@AsyncCJ11", "@AsyncFileTemplates12", "@EDFindEngagement4-2", "@AsyncBarge5-1", "@AsyncSDKAutoAnswer16", "@CustomMessagingBasic1Set1", "@customCRUDOperationSet1"],
          ["@EmailBasic1Set1-2", "@EmailBasic1Set2-2", "@ChatPrerouting1", "@EmailRona6-2", "@EmailTransfer9-1", "@EmailCJ10-2", "@EmailRealtime14-1", "@AsyncBasic1Set1-2", "@AsyncSDKBarge5-1", "@AsyncObserve3-2","@AsyncBarge5-2", "@EmailURL11", "@EmailTemplate8", "@AsyncSDKTransfer2-2", "@AdminCallback", "@AsyncACW6-1", "@AsyncACWPerQueue7", "@AdminOrchestration", "@AdminQueueThreshold", "@AdminServiceUser","@AdminUISearch", "@AdminUICheck-1", "@AuditTrailTimeTable2", "@AuditTrialBasic1", "@customCRUDOperationSet2", "@EDFindEngagement4-1", "@AAppsSanityBotCRUD1", "@AAppsSanityBotChat2", "@AAppsSSFCRUD15", "@AAppsSanityVoice13Set1"],
          ["@EmailBasic1Set2-3", "@AsyncBarge5-3", "@AsyncSDKTransfer2-3", "@AsyncSDKBarge5-2", "@AsyncSDKRona14", "@AdminUICheck-2", "@MessagingPreroutingWithIntegration1", "@AAppsBotUI3", "@AAppsChatBusinessStrategy5", "@AAppsChatSurvey6","@AAppsSanityChat4", "@AAppsSanityUC3Voice14", "@AAppsSanityVoice13Set2","@AAppsSSFUI7", "@AAppsSSFUIOperations11", "@AAppsSSFUIVariables8", "@AAppsSSFUIVariablesComplex10", "@AAppsSSFUIVariablesOutput9", "@AAppsSSFUIVariablesReadOnly12", "@Omni_Digital", "@EDGiveTreatment5", "@AsyncSDKACW6", "@Metrics_API30","@BusinessHoursForQueues", "@ReatimeAPI10Set1", "@EmailQuickText5", "@AsyncSDKBasic1Set1", "@AAppsVoiceVariables16", "@AsyncTransfer2", "@AdminRona"],
          ["@AsyncSDKQTTemplate9", "@AsyncSDKFileTemplates12","@EmailAuditTrail4","@EmailTemplateAuditTrail5","@FileTemplateAuditTrail6","@QuickTextTemplateAuditTrail7","@URLTemplateAuditTrail8","@WebhookResponse","@AgentAssistAdministration", "@Notification", "@AsyncACW6-2", "@NGMAdminPortal", "@AsyncSDKCJ11","@CpaasElement","@RoutePointsAPI","@NGMUiSanity", "@SuspendResumeTenant", "@RoutePoints", "@RoutingRules"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false,  // enabling notifications
        true // enabling retry
      ),
      utilsBDD.createParamCron(
        "15 0 * * *",
        [
         ["@CustomerJourneyAPIs", "@HealthCheck", "@EDAuditTrailWorkflow1", "@TimeTables", "@UMR", "@ChatQuickTextTemplate9", "@Assisted", "@NGMBulkAgent", "@MSTeams1ToMany", "@MSTeamsChannelSearch", "@MSTeamsChat","@MSTeamsVeifyCapabilities", "@SyntheticSanity", "@ChatBasic1Set1", "@ChatTransfer2-1", "@ChatObserve3-2", "@ChatBarge5", "@ChatACW6", "@ChatACWPerQueue7-1", "@ChatTemplateURL8", "@ChatSDKReasonCode13", "@ChatRealtime10-3","@ChatCJ11-1", "@ChatReasonCode13", "@ChatRONA14-1", "@ChatSDKACW6-2", "@ChatSDKBasic1-1", "@ChatSDKBasic1Set2-1", "@ChatSDKBasic1Set3-1", "@ChatSDKTransfer2Set1-2"],
         ["@ChatTransfer2-2", "@ChatObserve3-1", "@ChatCoach4", "@ChatACWPerQueue7-2", "@ChatRealtime10-2", "@ChatRealtime10-5", "@ChatCJ11-2", "@ChatRONA14-2", "@ChatSDKBasic1Set2-2", "@ChatSDKBasic1Set3-2","@ChatSDKTransfer2Set1-1", "@ChatSDKObserve3Set1-1", "@ChatSDKObserve3Set2-2", "@ChatSDKCoach4", "@ChatSDKBarge5-1", "@ChatSDKACW6-1", "@ChatForcedLogout15", "@ChatSDKACWPerQueue7_Set1-2","@ChatSDKTemplateURL8", "@ChatSDKQuickTextTemplate9", "@ChatSDKRealtime10Set1-2", "@ChatSDKRealtime10Set2-2", "@ChatSDKCJ11-1", "@ChatSDKRona-2","@ChatSDKTransfer2Set2-2"],
         ["@ChatObserve3-3", "@ChatRealtime10-1", "@ChatRealtime10-4", "@ChatRealtime10Set3", "@ChatSDKBasic1-2", "@ChatSDKTransfer2Set2-1", "@ChatSDKObserve3Set1-2", "@ChatSDKObserve3Set2-1", "@ChatSDKBarge5-2", "@ChatSDKACWRealtime6","@ChatSDKACWPerQueue7_Set2-2", "@ChatSDKRealtime10Set1-1", "@ChatSDKRealtime10Set2-1", "@ChatSDKCJ11-2", "@ChatSDKRona-1","@TimezoneAPI","@RealtimeAPI_MeasureProducer"],
         ["@RTAnalytics_Basic","@RTAnalytics_RonaScenario", "@RTAnalytics_AbdAlerting", "@RTAnalytics_AbdQueue", "@RTAnalytics_TransferUserQueue", "@RTAnalytics_CoachBarge", "@RT_ReasonCode", "@RealtimeAPI-AnalyticsTransfer","@AgentStuckWorkCard", "@AdminAPI"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false,  // enabling notifications
        true // enabling retry
      ),
      utilsBDD.createParamCron(
        "30 0 * * *",
        [
         ["@VoiceRona5_SalesSpanish", "@VoiceLogout6_SalesFrench", "@VoiceRealtime7_Automation-English-2", "@VoiceMidCall10_SalesHindi", "@VoiceOutbound12_SalesSupport-1", "@VoiceSingleStepTransfer16_Billing-English", "@VoiceSingleStepTransfer16_Billing-French", "@VoiceSingleStepTransfer16_Billing-Spanish", "@VoiceAgentToAgent19_Irish-2", "@AXPCHybridVoice20", "@KarisEmergencyCall22","@VoiceOmni_Support-Spanish-3", "@VoiceRealtimeConsult7_Consult_Vietnamese_Set1", "@VoiceRealtimeConsult7_Consult_German_Set1", "@VoiceObserve2BrowserRefresh_Observe-French", "@VoiceRealtime7_Automation-Spanish-1", "@Voice-RestoreMedia-Sales21-Vietnamese", "@VoiceIncomingCall11_SupportEnglish", "@VoiceCoach3_Coach-English"],
         ["@VoiceConsultConference14_Consult-English", "@VoiceCoach3_Coach-Japanese", "@VoiceBarge4_Barge-English","@VoiceRealtime7_Automation-English-1", "@VoiceRealtime7_Automation-Spanish-3", "@VoiceOmni_Support-Spanish-1", "@VoiceObserve2_Observe-English","@VoiceObserve2_Observe-Spanish", "@VoiceCoach3_Coach-French", "@VoiceConsultConference14_Consult-French", "@VoiceConsultConference14_Consult-Japanese", "@VoiceConsultConference14_Consult-Spanish", "@VoiceCoach3_Coach-Spanish", "@VoiceBarge4_Barge-Spanish", "@VoiceRealtime7_Automation-French-1"],
         ["@VoiceRealtimeConsult_Observe-German-6","@VoiceRealtime7_Automation-Spanish-2", "@OmniCreateDataOnAccount", "@VoiceBarge4_Barge-Japenese", "@VoiceCoach3BrowserRefresh_Coach-Hindi", "@VoiceRealtime7_Automation-English-3","@VoiceAgentToAgent19_Irish-1","@VoiceOmni_Support-Spanish-2", "@VoiceRona5_SupportVietnamese", "@VoiceRealtime7_Automation-French-2"],
         ["@VoiceRealtimeConsult_Observe-German-1","@VoiceRealtimeConsult_Consult-Italian-1","@VoiceRealtimeConsult_Consult-Mandarin-1","@VoiceRealtimeConsult_Consult-Vietnamese-1","@VoiceConsultTransfer15_Consult-Hindi"],
         ["@VoiceRealtimeConsult_Observe-German-2","@VoiceRealtimeConsult_Consult-Italian-2","@VoiceRealtimeConsult_Consult-Mandarin-2","@VoiceRealtimeConsult_Consult-Vietnamese-2","@VoiceConsultTransfer15_Consult-Irish"],
         ["@VoiceRealtimeConsult_Observe-German-3","@VoiceRealtimeConsult_Consult-Italian-3","@VoiceRealtimeConsult_Consult-Mandarin-3","@VoiceBasic1Set1_SalesEnglish", "@VoiceOutbound12_SalesSupport-3"],
         ["@VoiceRealtimeConsult_Observe-German-4","@VoiceRealtimeConsult_Consult-Italian-4","@VoiceRealtimeConsult_Consult-Mandarin-4", "@VoiceRealtime7_AutomationConsultTransfer-Spanish-4", "@VoiceOutbound12_SalesSupport-2"],
         ["@VoiceRealtimeConsult_Observe-German-5","@VoiceAutoAnswer9_SalesJapanese"],
         ["@TestHoldReconnect-1"],["@BVRWSValidation2-2"],["@BVRWSValidation2-1"],["@TestPauseResume-1"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false
      ),
      utilsBDD.createParamCron(
        "45 0 * * *",
        [
         ["@EmailScreenPop15", "@ChatScreenPopSDK15", "@AsyncScreenPopSDK15"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false,  // enabling notifications
        true // enabling retry
      ),
      utilsBDD.createParamCron(
        "00 1 * * *",
        [
        ["@POMAgent"],
        ["@POMUI"],
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false
      ),
      utilsBDD.createParamCron(
        "00 5 * * *",
        [
         ["@HistoricalRealtimeAPI10", "@HistoricalOutBoundCall12", "@HistoricalAgentLogin", "@HistoricalAPI-ChatBasic1", "@HistoricalAPI-ChatTransfer2", "@HistoricalAPI-ChatCoach4", "@HistoricalAPI-ChatBarge5", "@HistoricalAPI-ChatReasonCode13","@HistoricalAPI-ChatRONA14", "@HistoricalEmailBasic", "@HistoricalAPI-ChatACW6", "@HistoricalAPI-ChatRONA14", "@DossierAgentByDispositionCode1", "@ReportSupervisorMonitoringSummary", "@Historical_DashboardLoginLogOut", "@HistoricalRealtimeVoicePriority7" ],
         ["@HistoricalVoiceVoiceAutoAnswer9", "@HistoricalUC3BasicSet1","@Contact_Detail_Report", "@HistoricalUC3BasicSet1","@DossierContactDetailSummary5-2", "@ReportEmergencyReport", "@DossierAgentPerformanceSummary11", "@DossierAgentNotReadyByReasonCodeReport", "@ReportAgentConfiguration","@DossierAgentLoginLogOut2", "@DossierAgentPerformanceSummary3", "@DossierCallBackDetailSummary4", "@DossierContactDetailSummary5-1", "@ReportAgentPerformanceByChannel", "@ReportAgentPerformance", "@ReportQueuePerformanceReport", "@DossierQueuePerformanceByChannel6", "@HistoricalAPI-ChatSDKBasic1" ],
         ["@AnalyticsHistorical_API", "@HistoricalAPI_TestValues","@HistoricalAPI-AsyncBarge5","@HistoricalVoiceConsultTransfer","@ReportContactDetailReport_2","@ReportContactDetailReport_3","@HistoricalAPI-AbdQueue","@HistoricalAPI-Analytics_TransferUser"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false
      ),

      utilsBDD.createParamCron(
        "30 5 * * *",
        [
        ["@New_VoiceUC3RealtimeConsultDifferentQueue7", "@New_Historical_QueuebyChannelReport_Abandoned", "@New_Historical_QueuebyChannelReport_ACW", "@New_Historical_QueuebyChannelReport_RONA", "@New_AgentByDispostionCodeKPI_Grid", "@New_DossierTransferbyChannel8","@New_AsyncWebSDKBasic1Set1","New_UnifiedSDKAdminConfig","@New_HistoricalAPI-AnalyticsConsult"],
        ["@New_DossierEmergencyCalls9", "@New_ReportTransferByChannel", "@New_RefreshMediaSessionSuper", "@New_AgentNotReadyByReasonCode","@New_AgentByQueuePerformance", "@New_AgentByDispositionCode","@New_DashboardLoginLogOut","@New_AgentPerformanceByChannel","@New_AsyncAndroidBasic1","@New_AsyncWebSDKBasic1Set1GeoLocation", "@New_VoiceSingleStepTransferOutboundCall"]
        ],
        ENABLE_CONCURRENT_BUILDS
      ),
      utilsBDD.createParamCron(
        "15 17 * * *",
        [
            ["@OTTConfig",],
            ["@OTTConfigPune",],
            ["@OTTBrowserResiliency", "@OTTServiceObserve", "@OTTBasicCall", "@OTTLoginExp", "@OTTMidcall", "@OTTOtherCallExp1", "@OTTOtherCallExp2", "@OTTSingleStepTransfer", "@OTTAADSSearch",],
        ],
        ENABLE_CONCURRENT_BUILDS,
        "auraName=CEC",
        false
        ),
        utilsBDD.createParamCron(
        "00 1 * * *",
        [
             ["@OTTFeaturePune", "@AXPCAPISanity"],
        ],
        ENABLE_CONCURRENT_BUILDS,
          "auraName=PUNE10"
      ),
    ],

    "qa-daily": [
      utilsBDD.createParamCron(
        "H/15 * * * *",
        [
         ["@ZDTSDKSanityAsyncTest","@ZDTSanityChatSDKTest","@ZDTSanityEmailTestIred", "@ZDTSanityChatTest","@ZDTSanityOutboundVoice","@ZDTRealtimeUIChatSanity","@ZDTOTTSanityAXPCHybridVoice", "@ZDTSanityVoiceUC3Test", "@ZDTVoiceUC3HoldUnholdSales"]
        ],
        DISABLE_CONCURRENT_BUILDS,
        "auraName=CEC",
        true,
        true
      ),
    ],
    "ci-daily": [
      utilsBDD.createParamCron(
        "H/15 * * * *",
        [
          ["@ZDTSDKSanityAsyncTest",  "@ZDTSanityChatSDKTest","@ZDTSanityOutboundVoice","@ZDTOTTSanityAXPCHybridVoice", "@ZDTRealtimeUIChatSanity","@ZDTSanityEmailTestIred","@ZDTSanityChatTest", "@ZDTSanityVoiceUC3Test", "@ZDTVoiceUC3HoldUnholdSales"]
        ],
        DISABLE_CONCURRENT_BUILDS,
        "auraName=CEC",
        true,
        true
      ),
    ],
   "ci": [
      utilsBDD.createParamCron(
        "00 0 * * *",
        [
          ["@EmailBasic1Set1-1", "@EmailBasic1Set2-1", "@EmailAdhoc2", "@EmailAutoResponse3", "@EmailDisclaimer4", "@EmailRona6-1", "@EmailSignature7", "@EmailPrerouting1", "@EmailTransfer9-2", "@EmailCJ10-1","@EmailFileTemplate12", "@EmailRealtime14-2", "@EmailACW-16", "@Emaili18n17-1", "@AsyncBasic1Set1-1", "@AsyncBasic1Set2", "@AsyncObserve3-1", "@AsyncCoach4", "@AsyncSDKTransfer2-1", "@AsyncURLTemplates8","@AsyncQTTemplate9", "@AsyncRealtime10", "@AsyncCJ11", "@AsyncFileTemplates12", "@EDFindEngagement4-2", "@AsyncBarge5-1", "@AsyncSDKCJ11", "@AsyncSDKAutoAnswer16", "@CustomMessagingBasic1Set1", "@customCRUDOperationSet1"],
          ["@EmailBasic1Set1-2", "@EmailBasic1Set2-2", "@ChatPrerouting1", "@EmailRona6-2", "@EmailTransfer9-1", "@EmailCJ10-2", "@EmailRealtime14-1", "@AsyncBasic1Set1-2", "@AsyncSDKBarge5-1", "@AsyncObserve3-2","@AsyncBarge5-2", "@EmailURL11", "@EmailTemplate8", "@AsyncSDKTransfer2-2", "@AdminCallback", "@AsyncACW6-1", "@AsyncACWPerQueue7", "@AdminOrchestration", "@AdminQueueThreshold", "@AdminServiceUser","@AdminUISearch", "@AdminUICheck-1", "@AuditTrailTimeTable2", "@AuditTrialBasic1", "@customCRUDOperationSet2", "@EDFindEngagement4-1", "@AAppsSanityBotCRUD1", "@AAppsSanityBotChat2", "@AAppsSSFCRUD15", "@AAppsSanityVoice13Set1"],
          ["@EmailBasic1Set2-3", "@AsyncBarge5-3", "@AsyncSDKTransfer2-3", "@AsyncSDKBarge5-2", "@AsyncSDKRona14", "@AdminUICheck-2", "@MessagingPreroutingWithIntegration1", "@AAppsBotUI3", "@AAppsChatBusinessStrategy5", "@AAppsChatSurvey6","@AAppsSanityChat4", "@AAppsSanityUC3Voice14", "@AAppsSanityVoice13Set2","@AAppsSSFUI7", "@AAppsSSFUIOperations11", "@AAppsSSFUIVariables8", "@AAppsSSFUIVariablesComplex10", "@AAppsSSFUIVariablesOutput9", "@AAppsSSFUIVariablesReadOnly12", "@Omni_Digital", "@EDGiveTreatment5", "@AsyncSDKACW6", "@Metrics_API30","@BusinessHoursForQueues", "@ReatimeAPI10Set1", "@EmailQuickText5", "@AsyncSDKBasic1Set1", "@AAppsVoiceVariables16", "@AsyncTransfer2", "@AdminRona", "@SuspendResumeTenant", "@AdminAPI"],
          ["@AsyncSDKQTTemplate9","@EmailAuditTrail4","@EmailTemplateAuditTrail5","@FileTemplateAuditTrail6","@QuickTextTemplateAuditTrail7","@URLTemplateAuditTrail8","@WebhookResponse", "@Notification", "@AsyncACW6-2", "@NGMAdminPortal","@AgentStuckWorkCard","@CpaasElement","@ChatSDKBasic1Set2-63183","@RoutePointsAPI","@NGMUiSanity", "@RoutePoints", "RoutingRules"]
        ],
        ENABLE_CONCURRENT_BUILDS,
         "",
        true,  // enabling notifications
        true // enabling retry
      ),

      //  utilsBDD.createParamCron(
      //   "20 0 * * *",
      //   [
      //    ["@customCRUDOperationSet1","@AsyncWebSDKBasic1Set1"],
      //    ["@CustomMessagingBasic1Set1"]
      //            ],
      //   ENABLE_CONCURRENT_BUILDS,
      //   "",
      //   false
      // ),
      utilsBDD.createParamCron(
        "25 0 * * *",
        [
         ["@CustomerJourneyAPIs", "@HealthCheck", "@EDAuditTrailWorkflow1", "@TimeTables", "@UMR", "@ChatQuickTextTemplate9", "@Assisted", "@NGMBulkAgent", "@MSTeams1ToMany", "@MSTeamsChannelSearch", "@MSTeamsChat","@MSTeamsVeifyCapabilities", "@SyntheticSanity", "@ChatBasic1Set1", "@ChatTransfer2-1", "@ChatObserve3-2", "@ChatBarge5", "@ChatACW6", "@ChatACWPerQueue7-1", "@ChatTemplateURL8", "@ChatSDKReasonCode13", "@ChatRealtime10-3","@ChatCJ11-1", "@ChatReasonCode13", "@ChatRONA14-1", "@ChatSDKACW6-2", "@ChatSDKBasic1-1", "@ChatSDKBasic1Set2-1", "@ChatSDKBasic1Set3-1", "@ChatSDKTransfer2Set1-2"],
         ["@ChatTransfer2-2", "@ChatObserve3-1", "@ChatCoach4", "@ChatACWPerQueue7-2", "@ChatRealtime10-2", "@ChatRealtime10-5", "@ChatCJ11-2", "@ChatRONA14-2", "@ChatSDKBasic1Set2-2", "@ChatSDKBasic1Set3-2","@ChatSDKTransfer2Set1-1", "@ChatSDKObserve3Set1-1", "@ChatSDKObserve3Set2-2", "@ChatSDKCoach4", "@ChatSDKBarge5-1", "@ChatSDKACW6-1", "@ChatForcedLogout15", "@ChatSDKACWPerQueue7_Set1-2","@ChatSDKTemplateURL8", "@ChatSDKQuickTextTemplate9", "@ChatSDKRealtime10Set1-2", "@ChatSDKRealtime10Set2-2", "@ChatSDKCJ11-1", "@ChatSDKRona-2","@ChatSDKTransfer2Set2-2"],
         ["@ChatObserve3-3", "@ChatRealtime10-1", "@ChatRealtime10-4", "@ChatRealtime10Set3", "@ChatSDKBasic1-2", "@ChatSDKTransfer2Set2-1", "@ChatSDKObserve3Set1-2", "@ChatSDKObserve3Set2-1", "@ChatSDKBarge5-2", "@ChatSDKACWRealtime6","@ChatSDKACWPerQueue7_Set2-2", "@ChatSDKRealtime10Set1-1", "@ChatSDKRealtime10Set2-1", "@ChatSDKCJ11-2", "@ChatSDKRona-1","@TimezoneAPI","@RealtimeAPI_MeasureProducer"],
         ["@RTAnalytics_Basic","@RTAnalytics_RonaScenario", "@RTAnalytics_AbdAlerting", "@RTAnalytics_AbdQueue", "@RTAnalytics_TransferUserQueue", "@RTAnalytics_CoachBarge", "@RT_ReasonCode", "@RealtimeAPI-AnalyticsTransfer"]
        ],
        ENABLE_CONCURRENT_BUILDS,
         "",
        false,  // enabling notifications
        true // enabling retry
      ),
      utilsBDD.createParamCron(
        "35 0 * * *",
        [
         ["@VoiceRona5_SalesSpanish", "@VoiceLogout6_SalesFrench", "@VoiceRealtime7_Automation-English-2", "@VoiceMidCall10_SalesHindi", "@VoiceSingleStepTransfer16_Billing-English", "@VoiceSingleStepTransfer16_Billing-French", "@VoiceSingleStepTransfer16_Billing-Spanish", "@VoiceAgentToAgent19_Irish-2", "@AXPCHybridVoice20", "@VoiceOmni_Support-Spanish-3", "@VoiceRealtimeConsult7_Consult_Portuguese_Set1", "@VoiceRealtimeConsult7_Consult_German_Set1", "@VoiceRealtimeConsult7_Consult_Vietnamese_Set2", "@VoiceRealtime7_Automation-Spanish-1", "@Voice-RestoreMedia-Sales21-Vietnamese", "@VoiceIncomingCall11_SupportEnglish", "@VoiceCoach3_Coach-English"],
         ["@VoiceConsultConference14_Consult-English", "@VoiceCoach3_Coach-Japanese", "@VoiceRealtimeConsult7_Consult_Portuguese_Set2", "@VoiceRealtimeConsult7_Consult_German_Set2", "@VoiceBarge4_Barge-English","@VoiceRealtime7_Automation-English-1", "@VoiceRealtime7_Automation-Spanish-3", "@VoiceOmni_Support-Spanish-1", "@VoiceObserve2_Observe-English","@VoiceObserve2_Observe-Spanish", "@VoiceCoach3_Coach-French", "@VoiceConsultConference14_Consult-French", "@VoiceConsultConference14_Consult-Japanese", "@VoiceConsultConference14_Consult-Spanish", "@VoiceCoach3_Coach-Spanish", "@VoiceRealtimeConsult7_Consult_Vietnamese_Set1", "@VoiceBarge4_Barge-Spanish", "@VoiceRealtime7_Automation-French-1"],
         ["@VoiceRealtime7_Automation-Spanish-2", "@OmniCreateDataOnAccount", "@VoiceBarge4_Barge-Japenese", "@VoiceCoach3BrowserRefresh_Coach-Hindi", "@VoiceObserve2BrowserRefresh_Observe-French", "@VoiceRealtime7_Automation-English-3","@VoiceAgentToAgent19_Irish-1","@VoiceOmni_Support-Spanish-2", "@VoiceRona5_SupportVietnamese", "@VoiceRealtime7_Automation-French-2"],
         ["@VoiceRealtimeConsult_Observe-German-1","@VoiceRealtimeConsult_Consult-Italian-1","@VoiceRealtimeConsult_Consult-Mandarin-1","@VoiceConsultTransfer15_Consult-Hindi"],
         ["@VoiceRealtimeConsult_Observe-German-2","@VoiceRealtimeConsult_Consult-Italian-2","@VoiceRealtimeConsult_Consult-Mandarin-2","@VoiceConsultTransfer15_Consult-Irish"],
         ["@VoiceRealtimeConsult_Observe-German-3","@VoiceRealtimeConsult_Consult-Italian-3","@VoiceRealtimeConsult_Consult-Mandarin-3","@VoiceBasic1Set1_SalesEnglish"],
         ["@VoiceRealtimeConsult_Observe-German-4","@VoiceRealtimeConsult_Consult-Italian-4","@VoiceUC3RealtimeConsultTransfer_Billing", "@VoiceRealtime7_AutomationConsultTransfer-Spanish-4"],
         ["@VoiceRealtimeConsult_Observe-German-5","@VoiceRealtimeConsult_Consult-Vietnamese-1","@VoiceAutoAnswer9_SalesJapanese"],
         ["@TestHoldReconnect-1"],["@BVRWSValidation2-2"],["@BVRWSValidation2-1"],["@TestPauseResume-1"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false
      ),
      utilsBDD.createParamCron(
        "15 0 * * *",
        [
         ["@EmailScreenPop15", "@ChatScreenPopSDK15", "@AsyncScreenPopSDK15"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false
      ),
      utilsBDD.createParamCron(
        "00 1 * * *",
        [
        ["@POMAgent"],
        ["@POMUI"],
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false
      ),
      utilsBDD.createParamCron(
        "15 1 * * *",
        [
            ["@OTTConfig",],
            ["@OTTConfigPune",],
            ["@OTTBrowserResiliency", "@OTTServiceObserve", "@OTTBasicCall", "@OTTLoginExp", "@OTTMidcall", "@OTTOtherCallExp1", "@OTTOtherCallExp2", "@OTTSingleStepTransfer", "@OTTAADSSearch",],
        ],
        ENABLE_CONCURRENT_BUILDS,
        "auraName=CEC",
        false
        ),
      utilsBDD.createParamCron(
        "00 7 * * *",
        [
         ["@HistoricalRealtimeAPI10", "@HistoricalOutBoundCall12", "@HistoricalAgentLogin", "@HistoricalAPI-ChatBasic1", "@HistoricalAPI-ChatTransfer2", "@HistoricalAPI-ChatCoach4", "@HistoricalAPI-ChatBarge5", "@HistoricalAPI-ChatReasonCode13","@HistoricalAPI-ChatRONA14", "@HistoricalEmailBasic", "@HistoricalAPI-ChatACW6", "@HistoricalAPI-ChatRONA14", "@DossierAgentByDispositionCode1", "@ReportSupervisorMonitoringSummary", "@Historical_DashboardLoginLogOut", "@HistoricalRealtimeVoicePriority7" ],
         ["@HistoricalVoiceVoiceAutoAnswer9", "@HistoricalUC3BasicSet1","@Contact_Detail_Report", "@HistoricalUC3BasicSet1","@DossierContactDetailSummary5-2", "@ReportEmergencyReport", "@DossierAgentPerformanceSummary11", "@DossierAgentNotReadyByReasonCodeReport", "@ReportAgentConfiguration","@DossierAgentLoginLogOut2", "@DossierAgentPerformanceSummary3", "@DossierCallBackDetailSummary4", "@DossierContactDetailSummary5-1", "@ReportAgentPerformanceByChannel", "@ReportAgentPerformance", "@ReportQueuePerformanceReport", "@DossierQueuePerformanceByChannel6", "@HistoricalAPI-ChatSDKBasic1" ],
         ["@AnalyticsHistorical_API", "@HistoricalAPI_TestValues","@HistoricalAPI-AsyncBarge5","@HistoricalVoiceConsultTransfer","@ReportContactDetailReport_2","@ReportContactDetailReport_3","@HistoricalAPI-Analytics_TransferUser","@HistoricalAPI-AbdAlerting "]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false
      ),
    ],

    "dev-10": [
      utilsBDD.createParamCron(
        "45 03 * * 1-5",
        [
        ["@AdminPortalHealthCheck", "@MultiAgentcreationLogin", "@WSHealthCheck", "@SystemAdminLogin", "@AuditTrialBasic1", "@UMR", "@AdminCloneUXProfile", "@OmniCreateDataOnAccount", "@UpdateProfile", "@Notification", "@CleanUpIRedMailBox"],
        ["@GroupCreation", "@AdminChat", "@AdminHomeCheck", "@AdminVerifySupervisorObserveNotificationIsEnabledByDefault", "@AttributeValidation", "@ProfileValidation", "@MultiplicityVerification", "@Assisted", "@EmailAdhoc2", "@ChatBasic1Set1", "@EmailTransfer9-1", "@ChatACW6"],
        ["@VoiceBasic1Set1_SalesEnglish", "@ChatTransfer2", "@ChatRONA14", "@OmniUpdateUserProfile", "@ChatACWPerQueue7", "@EmailBasic1Set1", "@ChatCoach4", "@AsyncBasic1Set1", "@EmailRona6-1", "@ChatBarge5"],
        ["@VoiceSingleStepTransfer16_Billing", "@ChatRealtime10Set1", "@VoiceObserve2_Observe", "@ChatObserve3", "@EmailDisclaimer4", "@VoiceAutoAnswer9_SalesJapanese", "@VoiceRona5_SalesSpanish", "@Email-Realtime-97118", "@Metrics_API30", "@EmailAutoResponseListAndDelete", "@AsyncACW6", "@AsyncACWPerQueue7"],
        ["@EmailAutoResponseCreate", "@CustomerJourneyAPIs", "@NGMAdminPortal", "@EmailCJ10", "@EmailQuickText5", "@VoiceBarge4_Barge", "@VoiceLogout6_Sales"],
        ["@VoiceConsultConference14_Consult", "@ChatReasonCode13", "@ChatQuickTextTemplate9", "@VoiceCoach3_Coach", "@ChatSDKBasic1-1", "@ChatSDKObserve3-1", "@ChatSDKCoach4", "@ChatSDKBarge5-1", "@ChatSDKACW6-1", "@ChatSDKACWPerQueue7_Set1-2", "@ChatSDKCJ11-1"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
	   utilsBDD.createParamCron(
        "45 02 * * 1-5",
        [
          ["@TimedACWCRM"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
    ],

    "dev-11": [
      utilsBDD.createParamCron(
        "30 18 * * *",
        [
            ["@OTTConfig",],
            ["@OTTConfigPune",],
            ["@OTTAXPVoiceConfig",],
            ["@OTTHCM","@OTTConsult","@OTTBrowserResiliency","@OTTServiceObserve","@OTTBasicCall","@OTTBasicCallN","@OTTLoginExp","@OTTMidcall","@OTTOtherCallExp1","@OTTOtherCallExp2","@OTTSingleStepTransfer","@OTTAADSSearch","@OTTCJ","@OTTAXPVoice"],
            ["@OTTServiceObserveN",],
        ],
        ENABLE_CONCURRENT_BUILDS,
          "auraName=PUNE10"
      ),
      utilsBDD.createParamCron(
        "40 18 * * *",
        [
            ["@OTTConfig",],
            ["@OTTAXPVoiceConfig",],
            ["@OTTDoneBasicCallTalkpathAudioValidation","@OTTBrowserResiliency","@OTTServiceObserve","@OTTBasicCall","@OTTLoginExp","@OTTMidcall","@OTTOtherCallExp1","@OTTOtherCallExp2","@OTTSingleStepTransfer","@OTTAADSSearch",],
        ],
        ENABLE_CONCURRENT_BUILDS,
          "auraName=TSI101"
      ),
      utilsBDD.createParamCron(
      "35 18 * * *",
        [
            ["@OTTConfig",],
            ["@OTTConfigPune",],
            ["@OTTConsult","@OTTBrowserResiliency","@OTTServiceObserve","@OTTBasicCall","@OTTLoginExp","@OTTMidcall","@OTTOtherCallExp1","@OTTOtherCallExp2","@OTTSingleStepTransfer","@OTTAADSSearch",],
        ],
        ENABLE_CONCURRENT_BUILDS,
          "auraName=PUNE102"
      ),
      utilsBDD.createParamCron(
        "05 03 * * *",
        [
            ["@OTTAdmin",],
        ],
        ENABLE_CONCURRENT_BUILDS,
          "auraName=TSI101"
      ),
      utilsBDD.createParamCron(
        "00 03 * * *",
        [
             ["@OTTAdminWithSync",],
        ],
        ENABLE_CONCURRENT_BUILDS,
          "auraName=PUNE102"
      ),
            utilsBDD.createParamCron(
        "10 03 * * *",
        [
             ["@OTTAdminWithSync",],
        ],
        ENABLE_CONCURRENT_BUILDS,
          "auraName=PUNE10"
      ),
       utilsBDD.createParamCron(
        "10 00 * * *",
        [
             ["@OTTHCGResiliency",],
        ],
        ENABLE_CONCURRENT_BUILDS,
          "auraName=PUNE10"
      ),
        utilsBDD.createParamCron(
        "05 00 * * *",
        [
             ["@OTTHCGResiliency",],
        ],
        ENABLE_CONCURRENT_BUILDS,
          "auraName=PUNE102"
      ),
       utilsBDD.createParamCron(
        "00 00 * * *",
        [
             ["@OTTHCGResiliency",],
        ],
        ENABLE_CONCURRENT_BUILDS,
          "auraName=TSI101"
      ),
         utilsBDD.createParamCron(
        "15 0 * * *",
        [
        ["@AdminPortalHealthCheck", "@WSHealthCheck", "@SystemAdminLogin", "@MultiAgentcreationLogin", "@UMR", "@Metrics_API30", "@CustomerJourneyAPIs", "@NGMAdminPortal", "@AdminUICheck", "@AdminCallback", "@AdminServiceUser", ],
        ["@ChatBasic1Set1", "@ChatObserve3-1", "@ChatACWPerQueue7-1", "@ChatRealtime10-1", "@ChatRealtime10-4", "@ChatCJ11-1", "@AsyncBasic1Set1-1", "@AsyncBarge5-1", ],
        ["@ChatTransfer2", "@ChatObserve3-2", "@ChatACW6", "@ChatACWPerQueue7-2", "@ChatTemplateURL8", "@ChatQuickTextTemplate9", "@ChatRealtime10-2", "@ChatRealtime10-5", "@ChatCJ11-2", "@ChatRONA14", "@AsyncBasic1Set1-2", "@AsyncObserve3", "@AsyncTransfer2", "@AsyncBarge5-2", "@AsyncURLTemplates8", "@AsyncQTTemplate9", "@EmailBasic1Set2-2", "@EmailCJ10-2", "@Omni_Digital", ],
        ["@ChatCoach4", "@ChatBarge5", "@ChatRealtime10-3", "@ChatReasonCode13", "@ChatForcedLogout15", "@AsyncCoach4", "@AsyncACW6", "@AsyncACWPerQueue7", "@AsyncRealtime10", "@AsyncCJ11", "@AsyncFileTemplates12", "@EmailAdhoc2", "@EmailTransfer9", ],
        ],
        ENABLE_CONCURRENT_BUILDS
      ),
      utilsBDD.createParamCron(
        "30 0 * * *",
        [
        ["@ChatSDKBasic1-1", "@ChatSDKBasic1Set2-1", "@ChatSDKBasic1Set3-1", "@ChatSDKTransfer2-1", "@ChatSDKObserve3-1", "@ChatSDKCoach4", "@ChatSDKBarge5-1", "@ChatSDKACW6-1", "@ChatSDKACWPerQueue7_Set1-2", "@ChatSDKTemplateURL8", "@ChatSDKQuickTextTemplate9", "@ChatSDKRealtime10-1", "@ChatSDKCJ11-1", "@ChatSDKRona-1", "@VoiceBasic1Set1_SalesEnglish", "@VoiceObserve2_Observe-English", "@VoiceObserve2_Observe-Spanish", "@VoiceCoach3_Coach-English", "@VoiceCoach3_Coach-Spanish", "@VoiceCoach3_Coach-French", ],
        ["@ChatSDKBasic1-2", "@ChatSDKBasic1Set2-2", "@ChatSDKTransfer2-2", "@ChatSDKBasic1Set3-2", "@ChatSDKObserve3-2", "@ChatSDKReasonCode13", "@ChatSDKBarge5-2", "@ChatSDKACW6-2", "@ChatSDKACWPerQueue7_Set2-2", "@ChatSDKRealtime10-2", "@ChatSDKCJ11-2", "@ChatSDKRona-2", "@VoiceBarge4_Barge-English", "@VoiceBarge4_Barge-Spanish", "@VoiceRealtime7_Automation-English", "@VoiceRealtime7_Automation-Spanish", "@VoiceRealtime7_Automation-French", "@VoiceAutoAnswer9_SalesJapanese", "@VoiceMidCall10_SalesHindi", "@VoiceIncomingCall11_SupportEnglish", ],
        ["@VoiceLogout6_SalesFrench", "@VoiceRona5_SalesSpanish", "@VoiceConsultConference14_Consult-English", "@VoiceConsultConference14_Consult-Spanish", "@VoiceConsultConference14_Consult-French", "@VoiceConsultConference14_Consult-Japanese", "@VoiceConsultTransfer15_Consult-Irish", "@VoiceConsultTransfer15_Consult-Hindi", "@VoiceSingleStepTransfer16_Billing-English", "@VoiceSingleStepTransfer16_Billing-Spanish", "@VoiceSingleStepTransfer16_Billing-French", "@VoiceAgentToAgent19_Irish", "@VoiceOmni_Support-Spanish", ],
        ["@OmniCreateDataOnAccount", ],
        ],
        ENABLE_CONCURRENT_BUILDS
      ),
    ],

    "dev-3": [
      utilsBDD.createParamCron(
        "5 0 * * *",
        [
        ["@BVRWSValidation2-1"],
        ["@BVRWSValidation2-2"],
        ["@TestPauseResume-1"],
        ["@TestHoldReconnect-1"],
        ["@BVRDeleteRecordingValidation-1"]
        ],
        ENABLE_CONCURRENT_BUILDS
      ),
    ],

       "dev-5": [
     utilsBDD.createParamCron(
        "00 0 * * *",
        [
          ["@AdminPortalHealthCheck", "@WSHealthCheck", "@SystemAdminLogin", "@MultiAgentcreationLogin", "@UMR", "@CIChatSanityTest", "@ChatVerifyTransferToServiceIndicator"],
          ["@CIChatTransfer", "@CIChatObserve", "@ChatACWDisposition", "@ChatACWAfterEndContact", "@CIChatRona", "@CIChatCoach", "@AgentToAgentloggedInorOut", "@CIVoiceSanityUC3", "@SanityAsyncTest"],
          ["@ChatSDKObserve-1_WSSanity", "@ChatSDKACWChannel_WSSanity", "@ChatSDKTransfer_WSSanity", "@ChatSDKQuickTextTemplate_WSSanity", "@ChatSDKBasicSet1_WSSanity", "@ChatSDKBarge_WSSanity"],
          ["@ChatSDKObserve-2_WSSanity", "@ChatSDKACWPerQueue_WSSanity", "@ChatSDKCoach_WSSanity"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
	  utilsBDD.createParamCron(
        "10 0 * * *",
        [
		  ["@EmailCJ10", "@ChatSDKCJWS"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
     utilsBDD.createParamCron(
        "20 0 * * *",
        [
          ["@ChatForcedLogoutClone", "@ChatRONA14", "@ChatSDKObserve3", "@ChatSDKQuickTextTemplate9", "@ChatObserve3", "@ChatSDKBasic1", "@ChatSDKACWPerQueue7", "@ChatCoach4", "@ChatSDKACW6", "@ChatReasonCode13", "@ChatSDKRona14", "@ChatQuickTextTemplate9", "@ChatSDKBasic1Set2_WS", "@ChatACWPerQueue7", "@ChatSDKBasic1Set3", "@ChatSDKBarge5", "@ChatSDKReasonCode13", "@ChatSDKObserve3", "@ChatBasic1Set1", "@ChatACW6", "@ChatSDKTransfer2", "@ChatTransfer2", "@ChatSDKCoach4", "@ChatBarge5"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
      utilsBDD.createParamCron(
        "30 0 * * *",
        [
          ["@EmailAdhoc2", "@EmailAutoResponse3", "@EmailBasic1Set1", "@EmailBasic1Set2", "@EmailDisclaimer4", "@EmailFileTemplate12", "@SmokeEmaili18n17", "@EmailQuickText5", "@EmailRona6-IRED_WS", "@EmailSignature7", "@EmailTemplate8", "@EmailTransfer9-1", "@EmailURL11"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
      utilsBDD.createParamCron(
        "40 0 * * *",
        [
          ["@KarisEmergencyCall22WS", "@VoiceOmni_Support_WS", "@VoiceOutbound12_SalesSupport", "@VoiceAgentToAgent19_Irish", "@VoiceAutoAnswer9_SalesJapanese", "@VoiceBarge4_Barge", "@VoiceBasic1Set1_SalesEnglish", "@VoiceCoach3_Coach", "@VoiceConsultConference14_Consult", "@VoiceConsultTransfer15_Consult", "@VoiceIncomingCall11_SupportEnglish", "@VoiceLogout6_SalesFrench", "@VoiceMidCall10_SalesHindi", "@VoiceObserve2_Observe", "@Voice-RestoreMedia-Sales21-Vietnamese", "@VoiceRona5_SalesSpanish", "@VoiceSingleStepTransfer16_Billing"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
      utilsBDD.createParamCron(
        "50 0 * * *",
        [
          ["@AsyncBasic1Set1-1", "@AsyncCJ11", "@AsyncObserve3-1", "@AsyncURLTemplates8"],
          ["@AsyncBasic1Set1-2", "@AsyncObserve3-2", "@AsyncSDKBarge5-1", "@AsyncSDKAutoAnswer16", "@customCRUDOperationSet2"],
          ["@AsyncACWPerQueue7", "@AsyncSDKBarge5-2", "@AsyncSDKRona14", "@AsyncTransfer2"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
	   utilsBDD.createParamCron(
        "00 1 * * *",
        [
          ["@CRM-SimReady"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "auraName=CEC",
        true
      ),
	  utilsBDD.createParamCron(
        "30 3 * * *",
        [
          ["@WSEOSCChatSupervisorObserveBargeIn", "@Non-TimedACWChatInteraction", "@Voice_EOD_ACW", "@Voice_EOS_Agent-to-Agent", "@VoiceAuto-Answer", "@Voice_EOS_BargeIn", "@SimReady", "@Supervisor_DashBoard", "@Supervisor_DashBoard_AXPC"],
          ["@WSTESTChat", "@setDispositionCode", "@Voice_EOS_Basic", "@Voice_EOS_Coach", "@Voice_EOS_ConsultAsConference", "@Voice_EOS_ConsultAsTransfer", "@Voice_EOS_DispositionCode"],
          ["@WSChatEOSCase", "@Voice_EOS_Observe", "@Voice_EOS_OutboundCall", "@Voice_EOS_Transfer"]
        ],
        ENABLE_CONCURRENT_BUILDS,
		   "auraName=CEC",
        true
      ),
    ],
    
    "dev-9": [
     utilsBDD.createParamCron(
        "15 1 * * *",
        [
          ["@ChatForcedLogoutClone", "@ChatRONA14", "@ChatSDKObserve3", "@ChatSDKQuickTextTemplate9", "@ChatObserve3", "@ChatSDKBasic1", "@ChatSDKACWPerQueue7", "@ChatCoach4", "@ChatSDKACW6", "@ChatReasonCode13", "@ChatSDKRona14", "@ChatQuickTextTemplate9", "@ChatSDKBasic1Set2", "@ChatACWPerQueue7", "@ChatSDKBasic1Set3", "@ChatSDKBarge5", "@ChatSDKReasonCode13", "@ChatSDKObserve3", "@ChatBasic1Set1", "@ChatACW6", "@ChatSDKTransfer2", "@ChatTransfer2", "@ChatSDKCoach4", "@ChatBarge5"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
      utilsBDD.createParamCron(
        "30 1 * * *",
        [
          ["@EmailACW-16", "@EmailAdhoc2", "@EmailAutoResponse3", "@EmailBasic1Set1", "@EmailBasic1Set2", "@EmailCJ10", "@EmailDisclaimer4", "@EmailFileTemplate12", "@SmokeEmaili18n17", "@EmailQuickText5", "@EmailRona6-IRED", "@EmailSignature7", "@EmailTemplate8", "@EmailTransfer9-1", "@EmailURL11"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
      utilsBDD.createParamCron(
        "45 1 * * *",
        [
          ["@Omni_Digital_WS", "@VoiceOutbound12_SalesSupport", "@VoiceAgentToAgent19_Irish", "@VoiceAutoAnswer9_SalesJapanese", "@VoiceBarge4_Barge", "@VoiceBasic1Set1_SalesEnglish", "@VoiceCoach3_Coach", "@VoiceConsultConference14_Consult", "@VoiceConsultTransfer15_Consult", "@VoiceWrongDIDNumber", "@VoiceLogout6_SalesFrench", "@VoiceMidCall10_SalesHindi_WS", "@VoiceObserve2_Observe", "@Voice-RestoreMedia-Sales21-Vietnamese", "@VoiceRona5_SalesSpanish", "@VoiceSingleStepTransfer16_Billing"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
      utilsBDD.createParamCron(
        "00 2 * * *",
        [
          ["@AsyncSDKBarge5-1", "@AsyncSDKAutoAnswer16", "@customCRUDOperationSet2"],
          ["@AsyncSDKBarge5-2", "@AsyncSDKRona14"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
       utilsBDD.createParamCron(
        "00 2 * * *",
        [
             ["@OTTFeaturePune"],
             ["@AXPCAPISanity"]
        ],
        ENABLE_CONCURRENT_BUILDS,
          "auraName=PUNE10"
      ),
    ],

    "dev-14": [
      utilsBDD.createParamCron(
        "30 23 * * *",
        [
        ["@NGMAXPSanity", "@RoutePointsAPI", "@RoutePoints", "@RoutingRules"]
        ],
        ENABLE_CONCURRENT_BUILDS
      ),
    ],

    "dev-18": [
     utilsBDD.createParamCron(
        "15 1 * * *",
        [
          ["@ChatForcedLogoutClone", "@ChatRONA14", "@ChatSDKObserve3", "@ChatSDKQuickTextTemplate9", "@ChatObserve3", "@ChatSDKBasic1", "@ChatSDKACWPerQueue7", "@ChatCoach4", "@ChatSDKACW6", "@ChatReasonCode13", "@ChatSDKRona14", "@ChatQuickTextTemplate9", "@ChatSDKBasic1Set2_WS", "@ChatACWPerQueue7", "@ChatSDKBasic1Set3", "@ChatSDKBarge5", "@ChatSDKReasonCode13", "@ChatSDKObserve3", "@ChatBasic1Set1", "@ChatACW6", "@ChatSDKTransfer2", "@ChatTransfer2", "@ChatSDKCoach4", "@ChatBarge5"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
      utilsBDD.createParamCron(
        "30 1 * * *",
        [
          ["@EmailAdhoc2", "@EmailAutoResponse3", "@EmailBasic1Set1", "@EmailBasic1Set2", "@EmailCJ10", "@EmailDisclaimer4", "@EmailFileTemplate12", "@SmokeEmaili18n17", "@EmailQuickText5", "@EmailRona6-IRED_WS", "@EmailSignature7", "@EmailTemplate8", "@EmailTransfer9-1", "@EmailURL11"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
      utilsBDD.createParamCron(
        "45 1 * * *",
        [
          ["@KarisEmergencyCall22WS", "@VoiceOmni_Support_WS", "@VoiceOutbound12_SalesSupport", "@VoiceAgentToAgent19_Irish", "@VoiceAutoAnswer9_SalesJapanese", "@VoiceBarge4_Barge", "@VoiceBasic1Set1_SalesEnglish", "@VoiceCoach3_Coach", "@VoiceConsultConference14_Consult", "@VoiceConsultTransfer15_Consult", "@VoiceIncomingCall11_SupportEnglish", "@VoiceLogout6_SalesFrench", "@VoiceMidCall10_SalesHindi", "@VoiceObserve2_Observe", "@Voice-RestoreMedia-Sales21-Vietnamese", "@VoiceRona5_SalesSpanish", "@VoiceSingleStepTransfer16_Billing"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
      utilsBDD.createParamCron(
        "00 2 * * *",
        [
          ["@AsyncBasic1Set1-1", "@AsyncCJ11", "@AsyncObserve3-1", "@AsyncURLTemplates8"],
          ["@AsyncBasic1Set1-2", "@AsyncObserve3-2", "@AsyncSDKBarge5-1", "@AsyncSDKAutoAnswer16", "@customCRUDOperationSet2"],
          ["@AsyncACWPerQueue7", "@AsyncSDKBarge5-2", "@AsyncSDKRona14", "@AsyncTransfer2"]
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        true
      ),
	   utilsBDD.createParamCron(
        "00 3 * * *",
        [
		  ["@WSEmailTransfer", "@EmailHyperlinks", "@WSAutosaveEmailACW", "@WSEmailEditNote", "@CJEmailAddNote", "@EditNoteEmailCJ", "@EmailCJDeleteNote", "@WSOutboundEmail", "@WSEmailAddNote"]
		],
        ENABLE_CONCURRENT_BUILDS,
        "",
		true
      ),
    ],

    "dev-19": [
      utilsBDD.createParamCron(
        "00 0 * * *",
        [
          ["@RealtimeAPI-AnalyticsThreshold", "@RealtimeAPI-AnalyticsRona", "@RealtimeAPI-AnalyticsTransfer", "@Sanity_RTAnalytics_ForceNotReady", "@RealtimeAPI-AnalyticsObserve_Coach_Barge", "@RealtimeAPI-AnalyticsACW", "@RealtimeAPI-AnalyticsAbandonedAlert", "@ChatSDKRealtime10Set1-2", "@ChatSDKRealtime10Set2-2", "@EmailRealtime14-2"],
          ["@Sanity_RTAnalytics_ForceFinishWOrk", "@Sanity_RT_ReasonCode", "@RealtimeAPI-AnalyticsAbandonedQueue", "@ReatimeAPI10Set1", "@ChatSDKRealtime10Set1-1", "ChatSDKRealtime10Set2-1", "@ChatSDKACWRealtime6", "@EmailRealtime14-1"],
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false
      ),
      utilsBDD.createParamCron(
        "45 0 * * *",
        [
        ["@HistoricalAPIAnalytics"],
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false
      ),
    ],

  "dev-21": [
    utilsBDD.createParamCron(
        "0 * * * *",
        [
          ["@ChatSDKBasic1Set2-63183"],
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false
    ),
    utilsBDD.createParamCron(
        "40 * * * *",
        [
          ["@HistoricalPowerBIAgentPerformanceDossier", "@HistoricalPowerBIAgentPerformanceIntervalReport","@HistoricalPowerBIAgentByQueuePerformanceIntervalReport","@HistoricalPowerBIAgentLoginLogoutIntervalReport","@HistoricalPowerBIAgentPerformanceByChannelIntervalReport","@HistoricalPowerBITransferByChannelDossier","@HistoricalPowerBIQueuePerformanceDossier","@HistoricalPowerBIQueuePerformanceByChannelDossier","@HistoricalPowerBIAgentPerformanceByChannelDossier","@HistoricalPowerBIAgentBydispositionDossier"],
        ],
        ENABLE_CONCURRENT_BUILDS,
        "",
        false
    ),
],

    "dev-22": [
      utilsBDD.createParamCron(
        "30 14 * * 0",
        [
        ["@OmniAccountConfig", "@BusinessScppAccountConfig", "@PreroutingAccountConfig", ],
        ["@OmniCreateDataOnAccount", "@BussinessScreenPopCreateDataOnAccount", "@PreroutingCreateDataOnAccount", ],
        ["@AdminPortalHealthCheck", "@HealthCheck", ],
        ["@BusinessHoursForQueues", "@NGMAdminPortal", ],
        ],
        ENABLE_CONCURRENT_BUILDS
      ),
      utilsBDD.createParamCron(
        "30 17 * * *",
        [
        ["@AdminUICheck", "@EmailAdhoc2", "@EmailACW-16", ],
        ["@EmailAutoResponse3", "@EmailDisclaimer4", "@EmailFileTemplate12", "@EmailCJ10-1", ],
        ["@EmailBasic1Set2-2", "@EmailSignature7", ],
        ["@EmailCJ10-2", "@EmailBasic1Set1-1", "@EmailBasic1Set2-1", "@EmailTemplate8", ],
        ["@EmailBasic1Set1-2", "@EmailQuickText5", ],
        ["@EmailRona6-1", "@EmailTransfer9-1", "@EmailRealtime14-1", ],
        ["@EmailRona6-2", "@EmailRealtime14-2", "@EmailTransfer9-2", "@EmailPrerouting1", ],
        ["@EmailURL11", "@EmailBasic1Set2-3", "@Emaili18n17-1", ],
        ],
        ENABLE_CONCURRENT_BUILDS
      ),
      utilsBDD.createParamCron(
        "30 20 * * *",
        [
        ["@ChatBarge5", "@ChatReasonCode13", "@AAppsSanityChat4", ],
        ["@ChatBasic1Set1", "@ChatACWPerQueue7-1", "@AAppsChatSurvey6", ],
        ["@ChatTemplateURL8", "@ChatQuickTextTemplate9", "@AAppsChatBusinessStrategy5", ],
        ["@ChatACWPerQueue7-2", "@ChatACW6", "@ChatObserve3-3", ],
        ["@ChatForcedLogout15", "@ChatRealtime10-1", ],
        ["@ChatCoach4", "@ChatRealtime10-4", "@ChatRealtime10-3", "@ChatObserve3-1", ],
        ["@ChatRealtime10-2", "@ChatCJ11-2", "@ChatObserve3-2", "@ChatRONA14-1", "@ChatTransfer2-1", ],
        ["@ChatTransfer2-2", "@ChatRONA14-2", "@ChatPrerouting1", ],
        ["@ChatRealtime10-5", ],
        ["@ChatCJ11-1", ],
        ],
        ENABLE_CONCURRENT_BUILDS
      ),
      utilsBDD.createParamCron(
        "30 23 * * *",
        [
        ["@ChatSDKBasic1-1", "@ChatSDKReasonCode13", "@ChatSDKCJ11-1", "@ChatSDKBasic1Set3-1", "@ChatSDKTemplateURL8", "@ChatSDKRona-1", ],
        ["@ChatSDKACWPerQueue7_Set1-2", "@ChatSDKRona-2", "@ChatSDKBasic1Set2-2", "@ChatSDKQuickTextTemplate9", ],
        ["@ChatSDKBasic1Set3-2", "@ChatSDKCJ11-2", "@ChatScreenPopSDK15-1", ],
        ["@ChatSDKACW6-2", "@ChatSDKBarge5-1", "@ChatSDKRealtime10-3", "@ChatScreenPopSDK15-2", ],
        ["@ChatSDKRealtime10-1", "@ChatSDKBasic1-2", "@ChatSDKACWPerQueue7_Set2-2", "@ChatSDKTransfer2-2", "@ChatSDKACW6-1", ],
        ["@ChatSDKTransfer2-1", "@ChatSDKRealtime10-2", "@ChatSDKBarge5-2", "@ChatSDKObserve3-1", ],
        ["@ChatSDKTransfer2-3", "@ChatSDKObserve3-2", "@ChatSDKACWRealtime6", ],
        ["@ChatSDKObserve3-3", "@ChatSDKRealtime10-4", "@ChatSDKBasic1Set2-1", "@ChatSDKCoach4", ],
        ],
        ENABLE_CONCURRENT_BUILDS
      ),
      utilsBDD.createParamCron(
        "30 2 * * *",
        [
        ["@AsyncBasic1Set1-2", "@AsyncQTTemplate9", ],
        ["@AsyncBasic1Set2", "@AsyncCJ11", "@AsyncCoach4", ],
        ["@AsyncBasic1Set1-1", "@AsyncURLTemplates8", "@AsyncACWPerQueue7", ],
        ["@AsyncACW6", "@AsyncFileTemplates12", "@AsyncRealtime10", "@MessagingPreroutingWithIntegration1", ],
        ["@AsyncBarge5-1", "@AsyncObserve3", ],
        ["@AsyncTransfer2", "@AsyncBarge5-2", "@AsyncBarge5-3", ],
        ],
        ENABLE_CONCURRENT_BUILDS
      ),
      utilsBDD.createParamCron(
        "30 5 * * *",
        [
        ["@AsyncSDKAutoAnswer16", "@AsyncSDKCJ11", ],
        ["@AsyncSDKTransfer2-1", "@AsyncSDKBarge5-2", ],
        ["@AsyncSDKRona14", "@AsyncSDKBasic1Set1", ],
        ["@AsyncSDKTransfer2-2", "@AsyncScreenPopSDK15-1", ],
        ["@AsyncSDKTransfer2-3", "@AsyncSDKBarge5-1", "@AsyncScreenPopSDK15-2", ],
        ],
        ENABLE_CONCURRENT_BUILDS
      ),
    ],

    "releasev2": [
      utilsBDD.createParamCron(
        "H/15 * * * *",
        [
        ["@SanityAsyncTest", "@SanityChatTest", "@SanityEmailTest", "@SanityVoiceUC3", "@SanityChatSDKTest", "@SanityOutboundVoice", ],
        ["@SanityVoiceUC3AudioValidation", ],
        ["@VoiceUC3HoldUnhold", "@SFDCCRMSyntheticSanity", ],
        ],
        ENABLE_CONCURRENT_BUILDS
      ),
    ],

    "stage": [
      utilsBDD.createParamCron(
        "0 2 * * *",
        [
        ["@AdminPortalHealthCheck", "@WSHealthCheck", "@SystemAdminLogin", "@MultiAgentcreationLogin", ],
        ["@CIChatSanityTest", "@CIVoiceSanityUC3", "@CIEmailSanityTest", "@CIChatTransfer", "@CIChatObserve", "@CIChatCoach", "@CIChatACWPQ", "@CIChatRona", "@CIEmailAdhoc", "@ChatACWMultiplcity", ],
        ["@CustomerJourneyAPIs", "@UC3MIA", "@CIUC3Observe", "@CIUC3Coach", "@CIUC3AutoAnswer", "@CIUC3ConsultConference", "@CIEmailBasicSet1", "@ChatACWCoach", ],
        ["@ChatACWBargein", "@VoiceUC3Mute", ],
        ["@VoiceUC3HoldUnhold", ],
        ],
        ENABLE_CONCURRENT_BUILDS
      ),
    ],
  ],
  // Draft Lab:
  // "dev-99": [
  //   "H/5 * * * *": [[]], //will use playwrightDefaultTags
  //   "H 13 * * *": [["@HealthCheckSysAdmin"]],
  //   "H 14 * * *": [["@BasicAApps"]],
  //   "H 15 * * *": [["@BasicObserve"]],
  //   "H 16 * * *": [["@ChatRona"]]
  // ]
  bddTestTags: [
    ["@SystemAdminLogin", "@WSHealthCheck", "@AdminPortalHealthCheck"],
    ["@MultiAgentCreationLogin", "@BasicAApps"],
    ["@SanityEmailTest","@SanityVoiceUC3", "@SanityChatTest", "@SanityAsyncTest","@SanityChatSDKTest"],
    ["@ChatCoach4", "@ChatTransfer", "@BasicObserve", "@OmniAgentCreationLogin"]
  ],
  playwrightDefaultTags: [
    ["@AdminPortalHealthCheck","@WSHealthCheck","@SystemAdminLogin","@MultiAgentcreationLogin"],
    ["@CIChatSanityTest","@CIVoiceSanityUC3","@CIEmailSanityTest","@CIChatTransfer","@CIChatObserve","@CIChatCoach","@CIChatACWPQ","@CIChatRona","@CIEmailAdhoc","@ChatACWMultiplcity"],
    ["@CustomerJourneyAPIs","@UC3MIA","@CIUC3Observe","@CIUC3Coach","@CIUC3AutoAnswer","@CIUC3ConsultConference","@CIEmailBasicSet1","@ChatACWCoach"],
    ["@ChatACWBargein","@VoiceUC3Mute"],
    ["@VoiceUC3HoldUnhold"]
  ]
)