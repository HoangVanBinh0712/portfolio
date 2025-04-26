const AboutMe = ({info}) => {
  return (
    <section id="section-contact" className="w-full scroll-mt-48 md:scroll-mt-48" data-aos="fade-up">
      <h1 className="text-center text-2xl font-bold md:text-5xl">About me</h1>
      <div class="mt-6 w-full overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md">
        <div class="flex flex-col md:flex-row">
          {/* Left side - Images */}
          <div class="w-full border-r border-gray-300 md:w-2/5">
            <div class="space-y-4 p-4">
              {/* Main profile image */}
              <div class="overflow-hidden rounded-lg border border-gray-300">
                <img class="h-auto w-full object-cover" src={info.avatar} alt="Profile" />
              </div>
            </div>
          </div>

          {/* Right side - Information */}
          <div class="w-full md:w-3/5">
            <div class="border-b border-gray-300 p-6">
              <h1 class="text-xl font-bold md:text-2xl">Personal Profile</h1>
            </div>

            <div class="space-y-6 p-6">
              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div class="space-y-2">
                  <h3 class="text-sm font-medium text-gray-500">Full Name</h3>
                  <div class="text-lg font-medium">{info.fullName}</div>
                </div>
                <div class="space-y-2">
                  <h3 class="text-sm font-medium text-gray-500">Birth</h3>
                  <div class="text-lg">{info.birth}</div>
                </div>
              </div>

              <div class="space-y-2">
                <h3 class="text-sm font-medium text-gray-500">Address</h3>
                <div class="text-lg">
                  {info.address[0]}
                  <br />
                  {info.address[1]}
                  <br />
                  {info.address[2]}
                </div>
              </div>

              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div class="space-y-2">
                  <h3 class="flex items-center gap-1 text-sm font-medium text-gray-500">
                    <i class="ri-mail-line"></i> Email
                  </h3>
                  <div class="break-words text-lg">{info.email}</div>
                </div>
                <div class="space-y-2">
                  <h3 class="flex items-center gap-1 text-sm font-medium text-gray-500">
                    <i class="ri-phone-line"></i> Phone
                  </h3>
                  <div class="text-lg">{info.phone}</div>
                </div>
              </div>

              <div class="h-px bg-gray-300"></div>

              <div class="space-y-4">
                <h3 class="text-lg font-medium">Social Media</h3>
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div class="space-y-2">
                    <h3 class="flex items-center gap-1 text-sm font-medium text-gray-500">
                      <i class="ri-facebook-fill"></i>
                      <a href={info.socialMedia.facebook} class="hover:underline">
                        Facebook
                      </a>
                    </h3>
                  </div>
                  <div class="space-y-2">
                    <h3 class="flex items-center gap-1 text-sm font-medium text-gray-500">
                      <i class="ri-linkedin-fill"></i>{' '}
                      <a href={info.socialMedia.linkedin} class="hover:underline">
                        LinkedIn
                      </a>
                    </h3>
                  </div>
                  <div class="space-y-2">
                    <h3 class="flex items-center gap-1 text-sm font-medium text-gray-500">
                      <i class="ri-github-fill"></i>{' '}
                      <a href={info.socialMedia.github} class="hover:underline">
                        GitHub
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 space-y-2 pb-6">
              <div className="h-px bg-gray-300"></div>

              <div className="text-lg font-medium">Short description: </div>
              <div className="text-md font-medium">{info.shortDescription}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;