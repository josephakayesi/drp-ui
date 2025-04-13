"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Organization = {
  id: string;
  name: string;
  logo: string;
  altText?: string;
};

type MissionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  organizations?: Organization[];
};

const DEFAULT_ORGANIZATIONS: Organization[] = [
  {
    id: "1",
    name: "Microsoft",
    logo: "https://i.pinimg.com/736x/cc/6d/be/cc6dbe41f6a6ce7519e30a40cfaae0e1.jpg",
    altText: "Microsoft logo",
  },
  {
    id: "2",
    name: "Amazon",
    logo: "https://i.pinimg.com/736x/b9/20/54/b92054577ac9bce30267573fd63a52a6.jpg",
    altText: "Amazon logo",
  },
  {
    id: "3",
    name: "Gilbane",
    logo: "https://images.unsplash.com/photo-1661348027228-e7f05cd5a254?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1pY3Jvc29mdCUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    altText: "Gilbane Logo",
  },
];

const DEFAULT_PROPS: MissionProps = {
  title: "We provide a place for children with special needs",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  description:
    "Cras sed felis eget velit aliquet sagittis id consectetur. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor.",
  ctaText: "Learn more",
};

const Mission = ({
  title = DEFAULT_PROPS.title,
  subtitle = DEFAULT_PROPS.subtitle,
  description = DEFAULT_PROPS.description,
  ctaText = DEFAULT_PROPS.ctaText,
  organizations = DEFAULT_ORGANIZATIONS,
}: MissionProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-padding mx-auto">
        <div className="flex-image-right items-center">
          <div className="text-left">
            <div className="section-divider">
              <span className="section-divider-text">Know about us</span>
            </div>
            <div className="after-header">
              <h2 className="section-title delay-200">{title}</h2>
              <p className="section-subtitle delay-400">{subtitle}</p>
              <p className="text-secondary-light mb-8 delay-600">
                {description}
              </p>
              <Button className="btn-primary delay-600">{ctaText}</Button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="rounded-lg overflow-hidden w-full max-w-lg">
              <Image
                src="https://i.pinimg.com/736x/54/28/cd/5428cd617e6b243c35b8b6fb378f5af7.jpg"
                alt="Children playing outside"
                width={800}
                height={600}
                className="object-cover rounded-lg image-right w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="grid w-full grid-cols-2 sm:grid-cols-3 gap-4 mt-16">
          {organizations.map((org) => (
            <div
              key={org.id}
              className="flex flex-col items-center stagger-item"
            >
              <Image
                src={org.logo}
                alt={org.altText ?? `${org.name} logo`}
                width={160}
                height={160}
                className="h-16 w-36 mb-2 object-contain rounded-md image-bw"
              />
              <span className=" text-secondary-light text-center">
                {org.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
