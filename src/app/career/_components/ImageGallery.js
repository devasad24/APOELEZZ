import Image from "next/image";

export default function ImageCollage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-12 gap-3 md:gap-4">
        {/* Top row */}
        <div className="col-span-12 md:col-span-5 relative h-48 md:h-64">
          <Image
            src="/images/team/f_1.webp"
            alt="Business meeting with people around a table"
            fill
            className="object-cover object-center rounded-md"
            style={{ objectPosition: "0% 10%" }}
          />
        </div>

        <div className="col-span-6 md:col-span-4 relative h-48 md:h-64">
          <Image
            src="/images/team/f_2.webp"
            alt="Office reception area with people"
            fill
            className="object-cover object-center rounded-md"
            style={{ objectPosition: "40% 10%" }}
          />
        </div>

        <div className="col-span-6 md:col-span-3 relative h-48 md:h-64">
          <Image
            src="/images/team/f_3.webp"
            alt="Person working at computer desk"
            fill
            className="object-cover object-center rounded-md"
            style={{ objectPosition: "85% 10%" }}
          />
        </div>

        {/* Bottom row */}
        <div className="col-span-6 md:col-span-4 relative h-48 md:h-64">
          <Image
            src="/images/team/f_4.webp"
            alt="Office hallway with tables"
            fill
            className="object-cover object-center rounded-md"
            style={{ objectPosition: "0% 75%" }}
          />
        </div>

        <div className="col-span-6 md:col-span-5 grid grid-cols-2 gap-3 md:gap-4">
          <div className="relative h-[70px] md:h-[120px]">
            <Image
              src="/images/team/f_5.webp"
              alt="Person working at desk"
              fill
              className="object-cover object-center rounded-md"
              style={{ objectPosition: "30% 65%" }}
            />
          </div>
          <div className="relative h-[70px] md:h-[120px]">
            <Image
              src="/images/team/f_6.webp"
              alt="Person working on project"
              fill
              className="object-cover object-center rounded-md"
              style={{ objectPosition: "60% 65%" }}
            />
          </div>
          <div className="relative h-[70px] md:h-[120px]">
            <Image
              src="/images/team/f_7.webp"
              alt="Person at workstation"
              fill
              className="object-cover object-center rounded-md"
              style={{ objectPosition: "45% 85%" }}
            />
          </div>
          <div className="relative h-[70px] md:h-[120px]">
            <Image
              src="/images/team/f_8.webp"
              alt="Office workspace"
              fill
              className="object-cover object-center rounded-md"
              style={{ objectPosition: "75% 85%" }}
            />
          </div>
        </div>

        {/* <div className="col-span-12 md:col-span-3 relative h-48 md:h-64">
          <Image
            src="/images/team/f_1.jpg"
            alt="City skyline with skyscrapers"
            fill
            className="object-cover object-center rounded-md"
            style={{ objectPosition: "90% 85%" }}
          />
        </div> */}
      </div>
    </div>
  );
}
