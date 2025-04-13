import { Component } from '@angular/core';
import {
  Company,
  ExperienceItemComponent,
} from './experience-item/experience-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [NgFor, ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  companies: Company[] = [
    {
      title: 'Staff Engineer',
      name: 'BlueSG',
      date: '02/2025 - Current',
      details: [
        {
          content: 'Building the new event driven architecture',
          details: [
            {
              content:
                'Stepped up as acting Scrum Master, coordinating daily team tasks to ensure smooth sprint execution and goal completion.',
            },
            {
              content:
                'Driving the implementation of the pre-defined major refactoring effort to replace the existing rental system with a new event-driven architecture (EDA) aimed at reducing latency, improving reliability while allowing scalability to meet planned business goals.',
            },
            {
              content:
                'Rapidly implemented a PoC of the EDA using AWS Lambda with CI/CD via AWS CDK, validating its integration with existing NestJS microservices.',
            },
            {
              content:
                'Established new codebases and CI/CD pipelines (CircleCI) for Lambda-based microservices and their infrastructure (AWS CDK).',
            },
            {
              content:
                'Author and contribute to the PRDs and ERDs for refactoring work packages, ensuring technical feasibility and providing clear implementation guidance for the team.',
            },
          ],
        },
        {
          content: 'Maintaining the current system',
          details: [
            {
              content:
                'Maintaining the current Typescript NestJS microservices system on AWS ECS, PostgreSQL (AWS RDS), with CI/CD via CircleCI and Terraform.',
            },
            {
              content:
                'Significantly reduced build wait time for the current system from ~20m to ~5m by leveraging CircleCI parallelism.',
            },
          ],
        },
      ],
    },
    {
      title: 'Senior Software Engineer',
      name: 'Primrose Capital Management',
      date: '07/2024 - 01/2025',
      details: [
        {
          content: 'Technology Team',
          details: [
            {
              content:
                'Collaborated directly with Portfolio Managers to gather requirements and deliver solutions that directly supported trading activities.',
            },
            {
              content:
                'Leveraged Python Flask microservices on AWS ECS and PostgreSQL (AWS RDS) with CI/CD via Bitbucket Pipelines and AWS CDK.',
            },
          ],
        },
        {
          content: 'Achievements:',
          details: [
            {
              content:
                'Successfully backfilled multi-year historical trading data from multiple crypto exchanges into a PostgreSQL timeseries database with partitioned tables, enabling more comprehensive historical analysis.',
            },
            {
              content:
                'Led a refactoring of the backtest reporting workflow, improving traceability and enabling clear visualization of backtest results for better decision-making.',
            },
            {
              content:
                'Designed and implemented a PoC, using Java Spring Boot microservices with Protobuf over WebSocket, to evaluate and integrate a new 3rd party SaaS providing real-time market data and order execution features, laying the groundwork for the development of a new low-latency internal market making system.',
            },
          ],
        },
      ],
    },
    {
      title: 'Engineering Manager',
      name: 'Doctor Anywhere',
      date: '10/2022 - 06/2024',
      details: [
        {
          content: 'Engineering Manager',
          details: [
            {
              content:
                'Led and scaled an engineering team (from 4 to 8 engineers) in the development of a medical concierge platform, implementing an effective onboarding system allowing new joiners to make their first PR on their first day.',
            },
            {
              content:
                'Led the development of an internal GenAI portal, delivering it under a tight deadline.',
            },
            {
              content:
                'Established a highly agile team environment, resulting in rapid feature development and deployment cycles, with user requests going live within an hour from ticket creation.',
            },
            {
              content:
                'Achieved rapid development and deployment cycles, with features going live well ahead of schedule.  Led the team to achieve a deployment frequency of 1.5 per day in 2023 (403 total) and 2.7 per day in Q1 2024 (178 total).',
            },
          ],
        },
        {
          content: 'Medical Concierge Platform (10/2022 - 06/2024)',
          details: [
            {
              content:
                'Designed and built a PoC for the initial chat feature using PubNub and internal microservices, forming the foundation for the production system.',
            },
            {
              content:
                'Rapidly mastered and implemented EKS, Helm, Cloudfront, Jenkins, Sonar, and Terraform for infrastructure management, deployment, and code analysis.',
            },
            {
              content:
                'Established a continuous deployment pipeline, enabling frequent and reliable production releases.',
            },
            {
              content:
                'Designed a new chat initialization flow with persistent storage, ensuring reliable chat handling and agent continuity.',
            },
            {
              content:
                'Developed a case and ticket management system for agents, including automatic doctor suggestions and audit history, to track user journeys.',
            },
            {
              content:
                'Integrated doctor data and ratings, including a local data copy for complex queries and recommendations, while maintaining the original data source as the single source of truth. Implemented automatic doctor rating calculations.',
            },
            {
              content:
                'Integrated email automation with pre-filled templates for efficient agent communication, and implemented SSO for secure agent login.',
            },
            {
              content: 'Tech stack:',
              details: [
                {
                  content:
                    'BE: Java Spring Boot and Hibernate deployed to AWS EKS, with AWS RDS (MySQL).',
                },
                {
                  content:
                    'FE: Next.js (React-based) deployed to AWS CloudFront.',
                },
                {
                  content:
                    'Infra: Jenkins pipelines, Terraform and Terragrunt infra-as-code.',
                },
              ],
            },
          ],
        },
        {
          content: 'Internal GenAI Portal (01/2024 - 06/2024)',
          details: [
            {
              content:
                'Customized a private fork of Hugging Face’s chat-ui repository for company needs, including SSO integration.',
            },
            {
              content:
                'Established a highly secure infrastructure pipeline using Terraform from Bitbucket pipelines with OIDC authentication, ensuring no secrets were stored in Bitbucket.',
            },
            {
              content:
                'Delivered the portal ahead of schedule, with zero production incidents at launch.',
            },
            {
              content: 'Tech stack:',
              details: [
                {
                  content:
                    'Fullstack Node.js application with SvelteKit deployed to AWS ECS, with MongoDB Atlas.',
                },
                {
                  content:
                    'Infra: Bitbucket Pipelines, Terraform and Terragrunt infra-as-code.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Senior Software Engineer',
      name: 'Instaclustr',
      date: '02/2022 - 10/2022',
      details: [
        {
          content: 'Internal Billing and Reporting Team',
          details: [
            {
              content:
                'Billing main tech stack: Java with Google Guice and MyBatis backend, PostgreSQL, CI/CD with Jenkins pipelines and AWS infrastructure managed by Terraform and Ansible.',
            },
            {
              content:
                'Reporting main tech stack: Apache Airflow for ETL, Apache Superset for data visualization and analysis, PostgreSQL, CI/CD with Jenkins pipelines and AWS infrastructure managed by Terraform and Ansible.',
            },
          ],
        },
        {
          content: 'Achievements:',
          details: [
            {
              content:
                'Set up and integrated the whole reporting platform from scratch with Apache Airflow, Apache Superset, and PostgreSQL.',
            },
            {
              content:
                'Implemented multiple highly-regarded PoC visualization charts for the Product team.',
            },
            {
              content:
                'Led 2 big refactoring efforts in billing system to consolidate tiny micro services and clean up billing calculations so more complex and transparent reports could be made.',
            },
          ],
        },
      ],
    },
    {
      title: 'Career Coach',
      name: 'Adnovum',
      date: '01/2020 - 01/2022',
      details: [
        {
          content: 'Line manager responsibilities:',
          details: [
            {
              content:
                'Managed a pool of 8 coachees, supporting their professional and personal development.',
            },
            {
              content:
                'Worked closely with team leads to ensure engagement and performance.',
            },
            {
              content:
                'Worked closely with HR on recruitment / performance review / compensation.',
            },
          ],
        },
        {
          content: 'Achievements:',
          details: [
            {
              content: 'Recognized as the top Career Coach in the VN office.',
            },
            {
              content: 'Achieved high coachee satisfaction and low attrition.',
            },
          ],
        },
      ],
    },
    {
      title: 'Senior Software Engineer',
      name: 'Adnovum',
      date: '06/2017 - 01/2022',
      details: [
        {
          content:
            '09/2021 - 01/2022: Next generation platform for a Swiss crisis management company',
          details: [
            {
              content:
                'Main tech stack: Java Spring Boot microservices backend, PostgreSQL, Keycloak for IAM and RBAC, CI/CD with GitHub Actions deploy as Docker clusters on on-premise VMs.',
            },
            {
              content: 'Achievements:',
              details: [
                {
                  content:
                    'Implemented IAM using Keycloak to synchronize with a legacy system, resulting in streamlined access control.',
                },
                {
                  content:
                    'Implemented RBAC using Keycloak and Spring AOP with complex business rules at entity level.',
                },
                {
                  content:
                    'Contributed ideas to improve JWT flow and reduce token size, leading to reduced network bandwidth requirements and improved response times.',
                },
              ],
            },
          ],
        },
        {
          content:
            '07/2020 - 09/2021: Centralized access management system for an agency of SG government',
          details: [
            {
              content:
                'Main tech stack: Java Spring Boot backend, Angular frontend, MariaDB, CI/CD with GoCD pipelines and Azure infrastructure managed by Terraform and Ansible.',
            },
            {
              content: 'Achievements:',
              details: [
                {
                  content:
                    'Owned and optimized the Azure infrastructure, resulting in significant cost reduction while facilitating local development.',
                },
                {
                  content:
                    'Refactored the ETL component to improve stability and eliminate code duplication..',
                },
                {
                  content:
                    'Developed automation scripts that reduced time spent on repetitive tasks.',
                },
              ],
            },
          ],
        },
        {
          content:
            '08/2019 - 07/2020: eServices system for an agency of SG government',
          details: [
            {
              content:
                'Main tech stack: .NET Framework / Core backend, Angular frontend, Microsoft SQL, CI/CD with GoCD pipelines and on-premise VMs deployed by PowerShell scripts.',
            },
            {
              content: 'Achievements:',
              details: [
                {
                  content:
                    'Developed PowerShell scripts to automate the deployment of backend and frontend components.',
                },
                {
                  content:
                    'Developed PowerShell scripts to automate .NET Entity Framework DB schema migrations.',
                },
                {
                  content:
                    'Consistently delivered full-stack features ahead of schedule.',
                },
              ],
            },
          ],
        },
        {
          content:
            '06/2017 - 08/2019: Investment product management system for a Swiss bank',
          details: [
            {
              content:
                'Main tech stack: Java Spring backend, Java Eclipse RCP frontend, Oracle DB, CI/CD with Jenkins pipelines and on-premise VMs.',
            },
            {
              content: 'Achievements:',
              details: [
                {
                  content:
                    'Designed and implemented complex GUI features using existing components.',
                },
                {
                  content:
                    'Refactored legacy code to implement new features with complex requirements.',
                },
                {
                  content:
                    'Created guides for setting up local development with complex component dependencies.',
                },
                {
                  content:
                    'Led troubleshooting for server issues and Flyway migrations for the VN team.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Software Engineer',
      name: 'Robert Bosch Engineering and Business Solutions Vietnam',
      date: '03/2015 - 06/2017',
      details: [
        {
          content:
            'Scripting / Automation engineer in Greenfield Architecture team:',
          details: [
            {
              content: 'Worked directly with architects in Germany and India.',
            },
            {
              content:
                'Worked on various languages (Python, VBA, Java) to analyze, visualize, and display dependency tree of automotive C code.',
            },
          ],
        },
        {
          content: 'Achievements:',
          details: [
            {
              content:
                'Automated tasks that reduced a full person-month of work to 15 minutes.',
            },
            {
              content:
                'Designed and implemented innovative visualizations of component dependencies, contributing directly to a white paper published in Germany.',
            },
          ],
        },
      ],
    },
  ];
}
