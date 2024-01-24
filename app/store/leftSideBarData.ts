import { LuCalculator } from "react-icons/lu";
import { IoIosGitNetwork } from "react-icons/io"; import { IoHardwareChipOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5"; import { FiGrid } from "react-icons/fi";
import { FiInbox } from "react-icons/fi"; import { GoGraph } from "react-icons/go"; import { LuMonitor } from "react-icons/lu";
import { GrStorage } from "react-icons/gr"; import { LuBrainCircuit } from "react-icons/lu";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { AWSIcons } from "assets/aws";



export const leftSideBarData = {
    aws: {
        icon: "s",
        tabs: [
            {
                title: 'Compute',
                icon: LuCalculator,
                subTabs: [
                    {
                        title: 'App Runner',
                        icon: AWSIcons.AppRunnerIcon
                    },
                    {
                        title: 'AutoScaling',
                        icon: AWSIcons.AutoScalingIcon
                    },
                    {
                        title: 'Batch',
                        icon: AWSIcons.AwsBatchIcon
                    },
                    {
                        title: 'Containers',
                        icon: AWSIcons.ContainersIcon
                    },
                    {
                        title: 'EC2',
                        icon: AWSIcons.Ec2Icon
                    },
                    {
                        title: 'Elastic Beanstalk',
                        icon: AWSIcons.ElasticBeanStalkIcon
                    },
                    {
                        title: 'Image Builder',
                        icon: AWSIcons.ImageBuilderIcon
                    },
                    {
                        title: 'Lamda',
                        icon: AWSIcons.LambdaIcon
                    },
                    {
                        title: 'Lightsail',
                        icon: AWSIcons.LightSailIcon
                    },
                ],
            },
            {
                title: 'Network',
                icon: IoIosGitNetwork,
                subTabs: [
                    {
                        title: 'API Gateway',
                    },
                    {
                        title: 'AppMesh',
                    },
                    {
                        title: 'CloudFront',
                    },
                    {
                        title: 'Direct Connect',
                    },
                    {
                        title: 'Global Accelerator',
                    },
                    {
                        title: 'Load Balancers',
                    },
                    {
                        title: 'Network Firewall',
                    },
                    {
                        title: 'Network Manager',
                    },
                    {
                        title: 'Route 53',
                    },
                    {
                        title: 'Transit Gateway',
                    },
                    {
                        title: 'VPC',
                    },
                    {
                        title: 'VPN',
                    },
                ],
            },
            {
                title: 'Storage',
                icon: FiInbox,
                subTabs: [
                    {
                        title: 'Archieve & Backup',
                    },
                    {
                        title: 'Backup',
                    },
                    {
                        title: 'File System',
                    },
                    {
                        title: 'S3',
                    },
                    {
                        title: 'Storage Gateway',
                    },
                ],
            },
            {
                title: 'Database',
                icon: GrStorage,
                subTabs: [
                    {
                        title: 'DMS',
                    },
                    {
                        title: 'DocumentDB',
                    },
                    {
                        title: 'Dynamo',
                    },
                    {
                        title: 'ElastiCache',
                    },
                    {
                        title: 'Keyspaces Keyspace',
                    },
                    {
                        title: 'MemoryDB',
                    },
                    {
                        title: 'Neptune',
                    },
                    {
                        title: 'QLDB',
                    },
                    {
                        title: 'RDS',
                    },
                    {
                        title: 'SimpleDB Domain',
                    },
                    {
                        title: 'Timestream Write',
                    },
                ],
            },
            {
                title: 'Security & Identity',
                icon: AiOutlineSecurityScan,
                subTabs: [
                    {
                        title: 'Access analyzer',
                    },
                    {
                        title: 'Account',
                    },
                    {
                        title: 'ACM PCA',
                    },
                    {
                        title: 'Audit Manager',
                    },
                    {
                        title: 'Cognito',
                    },
                    {
                        title: 'Detective',
                    },
                    {
                        title: 'Director    Service',
                    },
                    {
                        title: 'Firewall Manager (FMS)',
                    },
                    {
                        title: 'GuardDuty',
                    },
                    {
                        title: 'IAM',
                    },
                    {
                        title: 'KMS',
                    },
                    {
                        title: 'Secrets Manager',
                    },
                    {
                        title: 'Security Hub',
                    },
                    {
                        title: 'Shield',
                    },
                    {
                        title: 'Signer',
                    },
                    {
                        title: 'SSO Admin',
                    },
                    {
                        title: 'SSO Identity Store',
                    },
                    {
                        title: 'WAF',
                    },
                ],
            },
            {
                title: 'Tools',
                icon: IoSettingsOutline,
                subTabs: [
                    { title: "Budgets" },
                    { title: "CE (Cost Explorer)" },
                    { title: "Clean Rooms" },
                    { title: "Cloud9" },
                    { title: "Cloud Control" },
                    { title: "CloudFormation" },
                    { title: "CloudTrail" },
                    { title: "CloudWatch" },
                    { title: "CodeArtifact" },
                    { title: "CodeBuild" },
                    { title: "CodeCatalyst" },
                    { title: "CodeCommit" },
                    { title: "CodeDeploy" },
                    { title: "CodeGuru" },
                    { title: "CodePipeline" },
                    { title: "CodeStar" },
                    { title: "Config" },
                    { title: "Control Tower" },
                    { title: "DataSync" },
                    { title: "FinSpace" },
                    { title: "Grafana" },
                    { title: "License Manager" },
                    { title: "MQ" },
                    { title: "OpsWorks" },
                    { title: "Organizations" },
                    { title: "Pinpoint" },
                    { title: "Prometheus (AMP)" },
                    { title: "Resource Explorer" },
                    { title: "Resource Groups" },
                    { title: "Service Catalog" },
                    { title: "Service Discovery" },
                    { title: "SES" },
                    { title: "SFN (Step Functions)" },
                    { title: "SNS" },
                    { title: "SWF Domain" },
                    { title: "Synthetics" },
                    { title: "Transcribe" },
                    { title: "Transfer" },
                    { title: "Verified Access" },
                    { title: "WorkLink" },
                    { title: "WorkSpaces" },
                    { title: "XRay" }
                ]

            },
            {
                title: 'AI',
                icon: IoHardwareChipOutline,
                subTabs: [{ title: "Kendra" },
                { title: "Lex" },
                { title: "Sagemaker" }]
            },
            {
                title: "Analytics",
                icon: GoGraph,
                subTabs: [{ title: "Athena" },
                { title: "CloudSearch" },
                { title: "Data Exchange" },
                { title: "ElasticSearch" },
                { title: "EMR" },
                { title: "Glue" },
                { title: "Kinesis" },
                { title: "Lake Formation" },
                { title: "QuickSight" },
                { title: "Redshift" }]
            },
            {
                title: "Applications",
                icon: LuMonitor,
                subTabs: [{ title: "Amplify Console" },
                { title: "AppConfig" },
                { title: "AppFlow" },
                { title: "AppIntegrations" },
                { title: "AppStream" },
                { title: "AppSync" },
                { title: "Chime" },
                { title: "Connect" },
                { title: "Device Farm" },
                { title: "Elastic Transcoder" },
                { title: "Elemental MediaLive" },
                { title: "Gamelift" },
                { title: "IVS (Interactive Video)" },
                { title: "Media Convert Queue" },
                { title: "Media Package Channel" },
                { title: "MediaStore" }]
            },
            {
                title: "IoT",
                icon: LuBrainCircuit,
                subTabs: [{ title: "IOT" },
                ]
            },
            {
                title: "Other",
                icon: FiGrid,
                subTabs: [{ title: "ACM" },
                { title: "CloudHSM v2" },
                { title: "Comprehend Document Classifier" },
                { title: "DataPipeline" },
                { title: "DLM (Data Lifecycle Manager)" },
                { title: "FIS (Fault Injection Simulator)" },
                { title: "Kafka Connect (MSK Connect)" },
                { title: "Location" },
                { title: "Macie" },
                { title: "MSK" },
                { title: "MWAA (Managed Workflows for Apache Airflow)" },
                { title: "OpenSearch" },
                { title: "RAM" },
                { title: "Recycle Bin" },
                { title: "Roles Anywhere" },
                { title: "Service Quotas" },
                { title: "SES" },
                { title: "SNS" },
                { title: "SQS" },
                { title: "SSM" },
                { title: "Step Function (SFN)" }
                ]
            },
        ],
    },
};
