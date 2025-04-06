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
})
export class ExperienceComponent {
  companies: Company[] = [
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
                'Led a growing engineering team (from 4 to 6, then to 8 engineers) in building a medical concierge platform from scratch.',
            },
            {
              content:
                'Pioneered the development of an internal GenAI portal within a tight deadline.',
            },
            {
              content:
                'Fostered a highly agile team environment, enabling rapid feature development and deployment to production within short time frames with user requests going live within an hour from ticket creation.',
            },
            {
              content:
                'Achieved rapid development and deployment cycles, with features going live well ahead of schedule and deployments to production multiple times per day.',
            },
            {
              content:
                'In 2023, the team made 403 deployments to production. Which means there are more than 1.5 deployments per day, given there are 260 weekdays in 2023.',
            },
            {
              content:
                'In 2024, counting until April 1st, we had 178 deployments. Which means more than 2.7 deployments per day over the 65 weekdays of Q1 2024.',
            },
          ],
        },
        {
          content: 'Medical Concierge Platform (10/2022 - 06/2024)',
          details: [
            {
              content: 'Demonstrated strong technical leadership by:',
              details: [
                {
                  content:
                    'Conceptualizing and prototyping core functionalities: Designed and built a proof-of-concept (PoC) for the initial chat feature utilizing PubNub and internal microservices, which became the foundation for the production system.',
                },
                {
                  content:
                    'Mastering the technology stack: Quickly grasped and implemented technologies including EKS, Helm, Cloudfront, Jenkins, Sonar, and Terraform for infrastructure management, deployment, and code analysis.',
                },
                {
                  content:
                    'Devising a successful deployment strategy: Established a continuous deployment pipeline enabling frequent and reliable deployments to production environments.',
                },
                {
                  content:
                    'Solving technical challenges: Designed a new chat initialization flow with persistent storage to ensure reliable chat handling and agent continuity.',
                },
              ],
            },
            {
              content: 'Expanded the platform’s functionality by:',
              details: [
                {
                  content:
                    'Implementing case & ticket management: Developed a system for agents to track user journeys, including features like automatic doctor suggestions and audit history for comprehensive record-keeping.',
                },
                {
                  content:
                    'Integrating doctor data & ratings: Designed a local data copy for complex queries and doctor recommendations, while keeping the original data source as the single source of truth. Further implemented automatic doctor rating calculations based on various factors.',
                },
                {
                  content:
                    'Introducing email automation & SSO integration: Built an email system with pre-filled templates for efficient agent communication, and integrated the app with the company’s SSO system for secure and streamlined agent login.',
                },
              ],
            },
            {
              content: 'Tech stack:',
              details: [
                {
                  content:
                    'BE: Java Spring Boot & Hibernate deployed to AWS EKS, with AWS RDS (MySQL)',
                },
                {
                  content:
                    'FE: Next.js (React-based) deployed to AWS CloudFront',
                },
                {
                  content:
                    'Infra: Jenkins pipelines, Terraform & Terragrunt infra-as-code',
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
                'Leveraged Hugging Face’s chat-ui repository to create a private fork and customize it for company needs, including integration to the company’s SSO system.',
            },
            {
              content:
                'Established a highly secure infrastructure pipeline by running Terraform from Bitbucket pipelines with OIDC authentication and no secrets stored in Bitbucket.',
            },
            {
              content:
                'Delivered the portal well ahead of the tight Q1 2024 deadline, achieving zero production incidents during launch.',
            },
            {
              content: 'Tech stack:',
              details: [
                {
                  content:
                    'Fullstack Node.js application with SvelteKit deployed to AWS ECS, with MongoDB Atlas',
                },
                {
                  content:
                    'Infra: Bitbucket pipelines, Terraform & Terragrunt infra-as-code',
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
          content: 'Internal Billing & Reporting Team',
          details: [
            {
              content:
                'Billing main tech stack: Java with Google Guice & MyBatis backend, PostgreSQL, CI/CD with Jenkins pipelines & AWS infrastructure managed by Terraform & Ansible',
            },
            {
              content:
                'Reporting main tech stack: Apache Airflow for ETL, Apache Superset for data visualization & analysis, PostgreSQL, CI/CD with Jenkins pipelines & AWS infrastructure managed by Terraform & Ansible',
            },
          ],
        },
        {
          content: 'Achievements:',
          details: [
            {
              content:
                'Set up & integrated the whole reporting platform from scratch with Apache Airflow, Apache Superset, & PostgreSQL',
            },
            {
              content:
                'Implemented multiple PoC visualization charts that are highly appreciated by Product team',
            },
            {
              content:
                'Led 2 big refactoring efforts in billing system to consolidate tiny micro services & clean up billing calculations so more complex & transparent reports could be made',
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
                'Manage a pool of 8 coachees, support them on both professional & personal development',
            },
            {
              content:
                'Work closely with team leads to ensure engagement & performance',
            },
            {
              content:
                'Work closely with HR on recruitment / performance review / compensation',
            },
          ],
        },
        {
          content: 'Achievements:',
          details: [
            {
              content:
                'Was rated as the best Career Coach of VN office with high coachees satisfaction & low attrition rate',
            },
            {
              content:
                'Was loved by coachees that several asked for continued coaching outside company',
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
                'Main tech stack: Java Spring Boot microservices backend, PostgreSQL, Keycloak for IAM & RBAC, CI/CD with GitHub Actions deploy as Docker clusters on on-premise VMs',
            },
            {
              content: 'Achievements:',
              details: [
                {
                  content:
                    'Implemented IAM using Keycloak, synchronized with legacy system',
                },
                {
                  content:
                    'Implemented RBAC using Keycloak & Spring AOP with complex business rules at entity level',
                },
                {
                  content:
                    'Contributed several ideas on improving JWT flow as well as reducing token size',
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
                'Main tech stack: Java Spring Boot backend, Angular frontend, MariaDB, CI/CD with GoCD pipelines & Azure infrastructure managed by Terraform & Ansible',
            },
            {
              content: 'Achievements:',
              details: [
                {
                  content:
                    'Was owner of the whole Azure infrastructure, optimized usage to save cost while facilitate local development at the same time',
                },
                {
                  content:
                    'Refactors ETL component to improve stability & eliminate duplicated code',
                },
                {
                  content:
                    'Wrote several automation scripts that save time on repeated tasks',
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
                'Main tech stack: .NET Framework / Core backend, Angular frontend, Microsoft SQL, CI/CD with GoCD pipelines & on-premise VMs deployed by PowerShell scripts',
            },
            {
              content: 'Achievements:',
              details: [
                {
                  content:
                    'Wrote PowerShell scripts from scratch to deploy backend & frontend components automatically',
                },
                {
                  content:
                    'Wrote PowerShell scripts to invoke .NET Entity Framework to perform DB schema migration',
                },
                {
                  content:
                    'Delivered multiple full stack features ahead of schedule',
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
                'Main tech stack: Java Spring backend, Java Eclipse RCP frontend, Oracle DB, CI/CD with Jenkins pipelines & on-premise VMs',
            },
            {
              content: 'Achievements:',
              details: [
                {
                  content:
                    'Suggested & implemented complex GUI features using existing simple components',
                },
                {
                  content:
                    'Refactored multiple pieces of legacy code to implement new features with complex requirements',
                },
                {
                  content:
                    'Wrote several guides on setting up local development with complex dependencies between components',
                },
                {
                  content:
                    'Was main person in VN team to troubleshoot servers & Flyway migrations',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Software Engineer',
      name: 'Robert Bosch Engineering & Business Solutions Vietnam',
      date: '03/2015 - 06/2017',
      details: [
        {
          content:
            'Scripting / Automation engineer in Greenfield Architecture team:',
          details: [
            {
              content: 'Worked directly with architects in Germany & India',
            },
            {
              content:
                'Worked on various languages (Python, VBA, Java) to analyze, visualize, & display dependency tree of automotive C code',
            },
          ],
        },
        {
          content: 'Achievements:',
          details: [
            {
              content:
                'Automated tasks that used to require a full person-month of work to be done in 15 minutes',
            },
            {
              content:
                'Suggested & implemented innovative visualizations of a component’s upstream & downstream dependencies, contributed directly to a white paper published in Germany',
            },
          ],
        },
      ],
    },
  ];
}
