import { LuCalculator } from 'react-icons/lu'
import { AWSIcons } from '@/assets/aws'

const compute = {
  title: 'Compute',
  icon: LuCalculator,
  subTabs: [
    {
      title: 'App Runner',
      icon: AWSIcons.AppRunnerIcon,
      subList: [
        {
          id: '1',
          icon: AWSIcons.AppRunnerIcon,
          title: 'Apprunner Auto Scaling Configuration Version',
          desc: 'aws_apprunner_auto_scaling_configuration',
        },
        {
          id: '2',
          title: 'Apprunner Auto Scaling',
          desc: 'aws_apprunner_auto_scaling_configuration',
        },
      ],
    },
    {
      title: 'AutoScaling',
      icon: AWSIcons.AutoScalingIcon,
    },
    {
      title: 'Batch',
      icon: AWSIcons.AwsBatchIcon,
    },
    {
      title: 'Containers',
      icon: AWSIcons.ContainersIcon,
    },
    {
      title: 'EC2',
      icon: AWSIcons.Ec2Icon,
    },
    {
      title: 'Elastic Beanstalk',
      icon: AWSIcons.ElasticBeanStalkIcon,
    },
    {
      title: 'Image Builder',
      icon: AWSIcons.ImageBuilderIcon,
    },
    {
      title: 'Lambda',
      icon: AWSIcons.LambdaIcon,
    },
    {
      title: 'Lightsail',
      icon: AWSIcons.LightSailIcon,
    },
  ],
}

export default compute
