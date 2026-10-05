// Exact src listings supplied by the portfolio owner. Each line is a directory,
// followed by its immediate files after "|". Empty directories are retained.
// This compact format keeps the complete structures readable and auditable.
export type ArchitectureNode = { name: string; children?: ArchitectureNode[] };

export type ArchitectureProject = {
  name: string;
  short: string;
  stack: string;
  note: string;
  tree: ArchitectureNode[];
};

function parseListing(listing: string): ArchitectureNode[] {
  const root: ArchitectureNode = { name: "src", children: [] };
  const folders = new Map<string, ArchitectureNode>([["src", root]]);
  for (const rawLine of listing.trim().split("\n")) {
    const [rawDirectory, rawFiles = ""] = rawLine.trim().split("|");
    const directory = rawDirectory.trim();
    let parent = root;
    let path = "src";
    if (directory) {
      for (const segment of directory.split("/")) {
        path += `/${segment}`;
        let folder = folders.get(path);
        if (!folder) {
          folder = { name: segment, children: [] };
          parent.children!.push(folder);
          folders.set(path, folder);
        }
        parent = folder;
      }
    }
    for (const name of rawFiles.split(",").map((file) => file.trim()).filter(Boolean)) {
      parent.children!.push({ name });
    }
  }
  return [root];
}

const shipping = `
|proxy.ts
app|globals.css,layout.tsx,not-found.tsx
app/(auth)|layout.tsx
app/(auth)/forgot-password|page.tsx
app/(auth)/login|page.tsx
app/(auth)/register|page.tsx
app/(auth)/reset-password|page.tsx
app/(auth)/verify-otp|page.tsx
app/(dashboard)|layout.tsx
app/(dashboard)/branches|page.tsx
app/(dashboard)/branches/create|page.tsx
app/(dashboard)/dashboard|page.tsx
app/(dashboard)/dashboard/_components/admin|AdminDashboard.tsx
app/(dashboard)/dashboard/_components/delivery|DeliveryDashboard.tsx
app/(dashboard)/dashboard/_components/merchant|MerchantDashboard.tsx
app/(dashboard)/dashboard/_components/shared|DashboardSkeleton.tsx,StatCard.tsx
app/(dashboard)/deliveries|page.tsx
app/(dashboard)/deliveries/create|page.tsx
app/(dashboard)/deliveries/[id]|page.tsx
app/(dashboard)/earnings|page.tsx
app/(dashboard)/employees|page.tsx
app/(dashboard)/employees/create|page.tsx
app/(dashboard)/employees/[id]|page.tsx
app/(dashboard)/merchants|page.tsx
app/(dashboard)/merchants/create|page.tsx
app/(dashboard)/merchants/[id]|page.tsx
app/(dashboard)/orders|page.tsx
app/(dashboard)/orders/create|page.tsx
app/(dashboard)/orders/[id]|page.tsx
app/(dashboard)/profile|page.tsx
app/(dashboard)/reports|page.tsx
app/(dashboard)/settings|page.tsx
app/(dashboard)/settings/cities|page.tsx
app/(dashboard)/settings/governments|page.tsx
app/(dashboard)/settings/permissions|page.tsx
app/(dashboard)/settings/pricing|page.tsx
app/(dashboard)/settings/roles|page.tsx
app/(dashboard)/settings/shipping-types|page.tsx
app/(dashboard)/setup|page.tsx
components/common|ConfirmDialog.tsx,EmptyState.tsx,ErrorMessage.tsx,Loader.tsx,PageHeader.tsx,Pagination.tsx,PasswordInput.tsx,StatusBadge.tsx,ThemeToggle.tsx
components/layout|Breadcrumbs.tsx,Header.tsx,MobileNav.tsx,Sidebar.tsx,SidebarCollapsible.tsx,SidebarItem.tsx
components/providers|AuthProvider.tsx,ReduxProvider.tsx,ThemeProvider.tsx
components/ui|button.tsx,card.tsx,dialog.tsx,form.tsx,input.tsx,label.tsx,pagination.tsx,sheet.tsx,table.tsx,toast.tsx
constants|api-endpoints.ts,orderStatuses.ts,paymentTypes.ts,roles.ts,routes.ts,shippingTypes.ts
features/auth/components|DemoRoleButtons.tsx,ForgotPasswordForm.tsx,LoginForm.tsx,RegisterForm.tsx,ResetPasswordForm.tsx,VerifyOTPForm.tsx
features/auth/hooks|useForgotPassword.ts,useLogin.ts,useLogout.ts,useRegister.ts,useResetPassword.ts,useVerifyOTP.ts
features/auth/schema|forgot-password.schema.ts,login.schema.ts,register.schema.ts,reset-password.schema.ts,verify-otp.schema.ts
features/branches/components|BranchForm.tsx,BranchTable.tsx
features/branches/hooks|useBranches.ts
features/branches/schema|branch.schema.ts
features/dashboard/components|QuickActionsPanel.tsx,RecentOrdersTable.tsx,StatCard.tsx,StatsGrid.tsx
features/dashboard/hooks|useDashboardStats.ts
features/deliveries/components|DeliveryAssignedOrders.tsx,DeliveryForm.tsx,DeliveryTable.tsx
features/deliveries/hooks|useDeliveries.ts,useMyAssignedOrders.ts
features/deliveries/schema|delivery.schema.ts
features/employees/components|EmployeeForm.tsx,EmployeeTable.tsx
features/employees/hooks|useEmployees.ts
features/employees/schema|employee.schema.ts
features/merchants/components|MerchantForm.tsx,MerchantStatsCards.tsx,MerchantTable.tsx
features/merchants/hooks|useCreateMerchant.ts,useMerchants.ts
features/merchants/schema|merchant.schema.ts
features/orders/components|AssignDeliveryModal.tsx,OrderCostBreakdown.tsx,OrderForm.tsx,OrderProductsList.tsx,OrderStatusBadge.tsx,OrderTable.tsx,OrderTimeline.tsx,RejectOrderModal.tsx
features/orders/hooks|useAssignDelivery.ts,useCreateOrder.ts,useOrders.ts,useRejectOrder.ts,useUpdateOrderStatus.ts
features/orders/schema|order-create.schema.ts,order-update.schema.ts
features/profile/components|ProfileForm.tsx,ProfileImageUpload.tsx
features/profile/hooks|useProfile.ts
features/reports/components|ReportTable.tsx
features/reports/hooks|useReports.ts
features/settings/cities/components|CityForm.tsx,CityTable.tsx
features/settings/cities/hooks|useCities.ts
features/settings/cities/schema|city.schema.ts
features/settings/general/components|SettingsForm.tsx
features/settings/general/hooks|useSettings.ts
features/settings/general/schema|settings.schema.ts
features/settings/governments/components|GovernmentForm.tsx,GovernmentTable.tsx
features/settings/governments/hooks|useGovernments.ts
features/settings/governments/schema|government.schema.ts
features/settings/permissions/components|PermissionTable.tsx
features/settings/pricing/components|WeightPricingForm.tsx
features/settings/pricing/hooks|useWeightPricing.ts
features/settings/pricing/schema|weightPricing.schema.ts
features/settings/roles/components|RolePermissionsTable.tsx,RoleTable.tsx
features/settings/roles/hooks|useRoles.ts
features/settings/shipping-types/components|ShippingTypeForm.tsx,ShippingTypeTable.tsx
features/settings/shipping-types/hooks|useShippingTypes.ts
features/settings/shipping-types/schema|shippingType.schema.ts
features/setup/components|MerchantFormCascading.tsx
features/setup/hooks|useSetupWizard.ts
features/setup/schema
lib|utils.ts
lib/api|axiosInstance.ts
lib/hooks|useMediaQuery.ts
lib/utils|cn.ts,formatters.ts,permissions.ts
store|hooks.ts,index.ts
store/slices/api|apiSlice.ts
store/slices/auth|authSlice.ts
store/slices/ui|uiSlice.ts
types|api.types.ts,auth.types.ts,branch.types.ts,city.types.ts,dashboard.types.ts,delivery.types.ts,employee.types.ts,government.types.ts,index.ts,merchant.types.ts,order.types.ts,profile.types.ts,report.types.ts,role.types.ts,settings.types.ts,shippingType.types.ts,weightPricing.types.ts
`;

const school = `
|middleware.test.ts,middleware.ts
app|globals.css,layout.tsx,not-found.tsx,page.tsx
app/(auth)|layout.tsx
app/(auth)/login|page.tsx
app/(auth)/register|page.tsx
app/(dashboard)|layout.tsx
app/(dashboard)/admin|page.tsx
app/(dashboard)/admin/roles|page.tsx
app/(dashboard)/admin/users|page.tsx
app/(dashboard)/attendances|page.tsx
app/(dashboard)/attendances/create|page.tsx
app/(dashboard)/attendances/[id]|page.tsx
app/(dashboard)/classes|page.tsx
app/(dashboard)/classes/create|page.tsx
app/(dashboard)/classes/[id]|page.tsx
app/(dashboard)/classrooms|page.tsx
app/(dashboard)/dashboard|page.tsx
app/(dashboard)/grades|page.tsx
app/(dashboard)/grades/[id]|page.tsx
app/(dashboard)/notifications|page.tsx
app/(dashboard)/notifications/send|page.tsx
app/(dashboard)/notifications/sounds|page.tsx
app/(dashboard)/reports|page.tsx
app/(dashboard)/student/my-attendance|page.tsx
app/(dashboard)/student/my-grades|page.tsx
app/(dashboard)/student/my-profile|page.tsx
app/(dashboard)/students|page.tsx
app/(dashboard)/students/create|page.tsx
app/(dashboard)/students/[id]|page.tsx
app/(dashboard)/subjects|page.tsx
app/(dashboard)/subjects/create|page.tsx
app/(dashboard)/subjects/[id]|page.tsx
app/(dashboard)/teacher/attendances|page.tsx
app/(dashboard)/teacher/grades|page.tsx
app/(dashboard)/teacher/my-classes|page.tsx
app/(dashboard)/teachers|page.tsx
app/(dashboard)/teachers/create|page.tsx
app/(dashboard)/teachers/[id]|page.tsx
app/(dashboard)/time-slots|page.tsx
app/(dashboard)/timetables|page.tsx
app/api/auth|layout.tsx
app/api/auth/login|route.ts
app/api/auth/logout|route.ts
app/api/backend/[...path]|route.test.ts,route.ts
app/pending|page.tsx
app/system-map|page.tsx
components/common|ConfirmDialog.tsx,EmptyState.tsx,ErrorMessage.tsx,Loader.tsx,PageHeader.tsx,PageSkeleton.tsx,Pagination.tsx,StaggerItem.tsx,StatusBadge.tsx
components/layout|Breadcrumbs.tsx,CommandPalette.tsx,GlobalSearch.tsx,Header.tsx,MobileNav.tsx,Sidebar.tsx,SidebarItem.tsx
components/providers|AuthProvider.tsx,AuthTransitionProvider.tsx,SidebarProvider.tsx,StoreProvider.tsx,ThemeProvider.tsx
components/ui|avatar.tsx,badge.tsx,button.tsx,card.tsx,dialog.tsx,dropdown-menu.tsx,form.tsx,input.tsx,label.tsx,select.tsx,separator.tsx,sheet.tsx,skeleton.tsx,table.tsx,tabs.tsx
constants|api-endpoints.ts,attendance-status.ts,cache-times.ts,nav-config.ts,roles.ts,routes.ts
features/admin|api.ts,types.ts
features/admin/components|AdminRolesPage.tsx,AdminUsersPage.tsx,AdminUsersStats.tsx,AdminUserTable.skeleton.tsx,AdminUserTable.tsx,AssignRoleModal.tsx,RoleBadge.tsx,UsersWithoutRoleTable.tsx
features/admin/hooks|useAdminUsers.ts,useAssignRole.ts,useUsersWithoutRole.ts
features/admin/schema|assign-role.schema.ts
features/attendances|api.ts,types.ts
features/attendances/components|AttendanceBadge.tsx,AttendanceCalendar.tsx,AttendanceForm.tsx,AttendancesManagementPage.tsx,AttendanceStats.tsx,AttendanceTable.skeleton.tsx,AttendanceTable.tsx
features/attendances/hooks|useAttendanceActions.ts,useAttendances.ts,useMyAttendance.ts
features/attendances/schema|attendance.schema.ts
features/auth|api.ts,types.ts
features/auth/components|DemoLoginButtons.tsx,LoginForm.tsx,RegisterForm.tsx
features/auth/hooks|useLogin.ts,useLogout.ts,useRegister.ts
features/auth/schema|login.schema.ts,register.schema.ts
features/classes|api.ts,types.ts
features/classes/components|ClassCard.tsx,ClassForm.tsx,ClassGrid.skeleton.tsx,ClassGrid.tsx
features/classes/hooks|useClass.ts,useClassActions.ts,useClasses.ts
features/classes/schema|class.schema.ts
features/classrooms|api.ts,types.ts
features/classrooms/components|ClassroomForm.tsx,ClassroomTable.skeleton.tsx,ClassroomTable.tsx
features/classrooms/hooks|useClassroomActions.ts,useClassrooms.ts
features/classrooms/schema|classroom.schema.ts
features/classSubjects|api.ts,types.ts
features/classSubjects/components|ClassSubjectForm.tsx,ClassSubjectTable.tsx
features/classSubjects/hooks|useClassSubjectActions.ts,useClassSubjects.ts
features/classSubjects/schema|class-subject.schema.ts
features/dashboard|api.ts,types.ts
features/dashboard/components|AdminDashboard.tsx,DashboardSkeleton.tsx,QuickActions.tsx,RecentActivity.tsx,StatCard.tsx,StatsGrid.tsx,StudentDashboard.tsx,TeacherDashboard.tsx
features/dashboard/hooks|useDashboardStats.ts
features/grades|api.ts,types.ts
features/grades/components|GradeBadge.tsx,GradeForm.tsx,GradesManagementPage.tsx,GradeStats.tsx,GradeTable.skeleton.tsx,GradeTable.tsx,MyGradesPage.tsx
features/grades/hooks|useGradeActions.ts,useGrades.ts,useMyGrades.ts
features/grades/schema|grade.schema.ts
features/notifications|api.test.ts,api.ts,notificationQueue.test.ts,notificationQueue.ts,notificationRoutes.test.ts,notificationRoutes.ts,notifications.contract.test.ts,notificationSounds.test.ts,notificationSounds.ts,realtime.test.ts,realtime.ts,types.ts
features/notifications/components|NotificationBell.skeleton.tsx,NotificationBell.test.tsx,NotificationBell.tsx,NotificationFilters.tsx,NotificationListItem.tsx,NotificationRealtimeProvider.tsx,NotificationSoundLab.test.tsx,NotificationSoundLab.tsx,NotificationsPage.tsx,NotificationToastStack.tsx,SendNotificationForm.test.tsx,SendNotificationForm.tsx
features/notifications/hooks|useNotifications.ts,useNotificationSound.ts
features/notifications/schema|sendNotification.schema.test.ts,sendNotification.schema.ts
features/reports|api.ts,types.ts
features/reports/components|AttendanceReport.skeleton.tsx,AttendanceReport.tsx,AttendanceStatusChart.tsx,GradeBySubjectChart.tsx,GradeReport.skeleton.tsx,GradeReport.tsx
features/reports/hooks|useReports.ts
features/students|api.ts,types.ts
features/students/components|MyAttendancePage.tsx,MyProfilePage.tsx,StudentCard.skeleton.tsx,StudentCard.tsx,StudentForm.tsx,StudentTable.skeleton.tsx,StudentTable.tsx
features/students/hooks|useMyProfile.ts,useStudent.ts,useStudentActions.ts,useStudentAttendance.ts,useStudents.ts
features/students/schema|student.schema.ts
features/subjects|api.ts,types.ts
features/subjects/components|SubjectForm.tsx,SubjectTable.skeleton.tsx,SubjectTable.tsx
features/subjects/hooks|useSubject.ts,useSubjectActions.ts,useSubjects.ts
features/subjects/schema|subject.schema.ts
features/system-map|data.ts,SystemMap.tsx
features/teacherClasses|api.ts,types.ts
features/teacherClasses/components|TeacherClassForm.tsx,TeacherClassTable.tsx
features/teacherClasses/hooks|useTeacherClassActions.ts,useTeacherClasses.ts
features/teacherClasses/schema|teacher-class.schema.ts
features/teachers|api.ts,types.ts
features/teachers/components|TeacherCard.tsx,TeacherForm.tsx,TeacherTable.skeleton.tsx,TeacherTable.tsx
features/teachers/hooks|useTeacher.ts,useTeacherActions.ts,useTeachers.ts
features/teachers/schema|teacher.schema.ts
features/teacherSubjects|api.ts,types.ts
features/teacherSubjects/components|TeacherSubjectForm.tsx,TeacherSubjectTable.tsx
features/teacherSubjects/hooks|useTeacherSubjectActions.ts,useTeacherSubjects.ts
features/teacherSubjects/schema|teacher-subject.schema.ts
features/timeSlots|api.ts,types.ts
features/timeSlots/components|TimeSlotForm.tsx,TimeSlotTable.skeleton.tsx,TimeSlotTable.tsx
features/timeSlots/hooks|useTimeSlotActions.ts,useTimeSlots.ts
features/timeSlots/schema|time-slot.schema.ts,timeSlot.schema.ts
features/timetables|api.ts,types.ts
features/timetables/components|TimetableForm.tsx,TimetableTable.skeleton.tsx,TimetableTable.tsx
features/timetables/hooks|useMyTimetable.ts,useTimetableActions.ts,useTimetables.ts
features/timetables/schema|timetable.schema.ts
lib/api|axiosInstance.ts
lib/utils|cn.ts,formatters.ts,permissions.ts,transformResponse.ts
store|baseApi.ts,hooks.ts,index.ts
test|setup.ts
test/mocks|handlers.ts,server.ts
test/mocks/fixtures|notifications.ts
types|api.types.ts
`;

const freshCart = `
|App.css,App.jsx,index.css,main.jsx
assets/images|amazon.png,amazon.webp,AMERICAN.png,AMERICAN.webp,apple-store-vector-icon_901408-728.avif,App_Store_Badge.svg.png,App_Store_Badge.svg.webp,banner-4.jpeg,banner-4.webp,blog-img-1.jpeg,blog-img-1.webp,blog-img-2.jpeg,blog-img-2.webp,error.svg,freshcart-logo.svg,Google_Play_Store_badge_EN.svg.png,Google_Play_Store_badge_EN.svg.webp,Google_Play_Store_dge_EN.svg.png,grocery-banner-2.jpeg,grocery-banner-2.webp,grocery-banner.png,grocery-banner.webp,light-patten.svg,master.png,master.webp,paypal.png,paypal.webp,slider-2.jpeg,slider-2.webp,slider-image-1.jpeg,slider-image-1.webp,slider-image-2.jpeg,slider-image-2.webp,slider-image-3.jpeg,slider-image-3.webp
components|ApiErrorBoundary.jsx,AuthGuard.jsx,ComponentErrorBoundary.jsx,EnhancedProductCard.jsx,ErrorBoundaries.md,ErrorBoundary.jsx,ErrorDisplay.jsx,Footer.jsx,Header.jsx,HomeCategory.jsx,HomeSlider.css,HomeSlider.jsx,Loading.jsx,LoadingAuth.jsx,LoginPrompt.jsx,Navbar.jsx,NotFound.jsx,OfflineMessage.jsx,ProductCard.jsx
components/ui|button.jsx,card.jsx,carousel.jsx
context|AuthContext.jsx,CartContext.jsx
hooks|useBrands.jsx,useCategories.jsx,useErrorHandler.jsx,UseForgetPass.jsx,UseLogin.jsx,useProduct.jsx,useProductById.jsx,UseRegister.jsx,UseResetCode.jsx,UseResetPass.jsx
layouts|Layout.jsx,ProtectedRoute.jsx
lib|utils.js
pages/Authentication|ChangePassword.jsx,ForgetPassword.jsx,Login.jsx,Register.jsx,ResetPassword.jsx,VerifyResetCode.jsx
pages/Cart|AllOrders.jsx,Cart.jsx,Payment.jsx,Wishlist.jsx
pages/main|Brands.jsx,Categories.jsx,Dashbord.jsx,Home.jsx,ProductDetails.jsx,Products.jsx,Profile.jsx
services|api.js,authService.js,cartService.js,index.js,orderService.js,productService.js,README.md
validation|authValidation.js
`;

const yuma = `
app|error.tsx,globals.css,icon.png,layout.tsx,loading.tsx,not-found.tsx,page.tsx,robots.ts,sitemap.ts,web-vitals.tsx
app/(account)|layout.tsx
app/(account)/checkout|loading.tsx,page.tsx
app/(account)/orders|loading.tsx,page.tsx
app/(account)/orders/[id]|loading.tsx,page.tsx
app/(account)/profile|loading.tsx,page.tsx
app/(account)/profile/settings|page.tsx
app/(account)/wishlist
app/(auth)|layout.tsx
app/(auth)/login|page.tsx
app/(store)|error.tsx,layout.tsx,loading.tsx
app/(store)/cart|loading.tsx,page.tsx
app/(store)/categories|loading.tsx,page.tsx
app/(store)/categories/[slug]|loading.tsx,page.tsx
app/(store)/contact|loading.tsx,page.tsx
app/(store)/offers|page.tsx
app/(store)/products|error.tsx,loading.tsx,page.tsx
app/(store)/products/variant/[variantId]|loading.tsx,page.tsx
app/(store)/products/[slug]|error.tsx,loading.tsx,page.tsx
app/(store)/wishlist|loading.tsx,page.tsx
app/api|_auth.ts
app/api/auth|route.ts
app/api/auth/earn-points|route.ts
app/api/auth/send-otp|route.ts
app/api/auth/verify-otp|route.ts
app/api/cart|route.ts,_utils.ts
app/api/cart/add|route.ts
app/api/cart/remove|route.ts
app/api/cart/update|route.ts
app/api/cart/use-points|route.ts
app/api/checkout|route.ts
app/api/checkout-offer|route.ts
app/api/offers|route.ts
app/api/orders|route.ts
app/api/payment-methods|route.ts
app/api/product-variants|route.ts
app/api/profile/active-referral-points|route.ts
app/api/profile/add-referral|route.ts
app/api/profile/cities|route.ts
app/api/profile/me-customer|route.ts
app/api/profile/notifications|route.ts
app/api/profile/update-profile|route.ts
app/api/profile/wallet-transactions|route.ts
app/api/upload-payment-proof|route.ts
app/api/wallet/best-checks|route.ts
app/api/wallet/validate-checks|route.ts
app/api/webhooks|route.ts
app/api/wishlist|route.ts
app/components|nav-pill-menu.tsx
app/group-selection-test
app/logout|LogoutPageClient.tsx,page.tsx
components/account|ProfileMotion.tsx
components/common|ConfirmDialog.tsx,CoverLoading.tsx,EmptyState.tsx,ErrorMessage.tsx,ImageWithFallback.tsx,InfiniteScroll.tsx,Loader.tsx,PageSkeleton.tsx,Pagination.tsx,StatusBadge.tsx
components/contact|EmailQuickForm.tsx
components/home|CategoryOrbitSlider.tsx,CurvedLoop.tsx,HeroCarousel.client.tsx,HeroCarousel.tsx,HeroCarouselMount.client.tsx,heroSlides.ts,HomeGalleryWorld.tsx,HomeNotifications.client.tsx,HomeNotifications.tsx,HomeOffersUnified.tsx,InspirationStack.tsx,InteractiveImageHotspots.client.tsx,InteractiveImageHotspots.tsx,LogoLoop.tsx,LogoLoopStrip.tsx,MagicBentoSection.tsx,OffersScrollStack.client.tsx,OffersScrollStack.tsx,PromoRevealBanner.client.tsx,PromoRevealBanner.tsx
components/layout|AnnouncementBar.tsx,CartIcon.tsx,DesktopOnlySocialRail.tsx,Footer.tsx,HeaderActionIcons.tsx,MobileBottomNav.tsx,MobileNav.tsx,MobileTopBar.tsx,Navbar.tsx,NavLinks.tsx,RevealOnScroll.tsx,ScrollProgress.tsx,SearchBar.tsx,social-links-data.tsx,SocialLinks.tsx,SocialRail.client.tsx,UserMenu.tsx
components/providers|AppProviders.tsx,AuthProvider.tsx,StoreProvider.tsx,ThemeProvider.tsx,ToastProvider.tsx
components/support|SupportWidget.tsx
components/ui|button.tsx,Counter.tsx,input.tsx
config|fonts.ts,site.ts
constants|api-endpoints.ts,cache-times.ts,product-status.ts,routes.ts,seo.ts
features/auth|api.ts,types.ts
features/auth/components|LoginForm.client.tsx,LoginForm.tsx,OtpStep.tsx,PhoneStep.tsx,WelcomePointsSection.client.tsx,WelcomePointsSection.tsx
features/auth/hooks|useEarnPoints.ts,useLogin.ts,useLogout.ts,useSendOtp.ts,useVerifyOtp.ts
features/auth/lib|postLoginRedirect.ts,temporaryOtpToast.ts
features/auth/schema|login.schema.ts,otp.schema.ts,phone.schema.ts
features/breadcrumb|BreadcrumbNav.tsx
features/cart|api.ts,cartApi.ts,groupedVariantParents.ts,types.ts
features/cart/components|AddToCartButton.tsx,CartDrawer.tsx,CartEmpty.tsx,CartItem.tsx,CartPageContent.tsx,CartSummary.tsx,CartSyncProvider.tsx
features/cart/hooks|useCart.ts,useCartSync.ts
features/categories|api.ts,types.ts
features/categories/components|CategoriesPageGrid.tsx,category-showcase.types.ts,CategoryCard.tsx,CategoryGrid.tsx,CategoryHeroCard.tsx,CategoryProductsCarousel.tsx
features/categories/hooks|useCategories.ts
features/checkout|api.ts,types.ts,utils.ts
features/checkout/components|AddressForm.tsx,BankTransferDetails.tsx,CheckoutPageContent.client.tsx,CheckoutPageContent.tsx,CheckoutSteps.tsx,CityCombobox.tsx,OfferCheckoutPageContent.tsx,OrderSummary.tsx,PaymentForm.tsx
features/checkout/hooks|useAddress.ts,useCheckout.ts
features/checkout/schema|checkout.schema.ts
features/news|api.ts
features/offers|api.ts,server-api.ts,types.ts
features/offers/components|OffersPageContent.tsx
features/orders|api.ts,ordersApi.ts,types.ts
features/orders/components|OrderCard.tsx,OrderDetails.tsx,OrderJsonLd.tsx,OrdersPageContent.tsx,OrderTable.tsx,OrderTracking.tsx
features/orders/hooks|useOrder.ts,useOrders.ts
features/products|api.ts,types.ts
features/products/components|FeaturedProductsScrollHorizontal.tsx,HomeFeaturedProductsSection.tsx,HomeHorizontalProductsExperience.tsx,MobileProductsFilters.tsx,ProductBreadcrumb.tsx,ProductCard.tsx,ProductDetails.tsx,ProductDetailsDebugLogger.client.tsx,ProductDetailsExperience.tsx,ProductDetailsMobileAddBar.client.tsx,ProductDetailsPanel.client.tsx,ProductDetailsPurchaseLayout.client.tsx,ProductDetailsScrollReset.client.tsx,ProductDetailsSkeleton.tsx,ProductDetailsSpecs.client.tsx,ProductFilter.tsx,ProductGallery.client.tsx,ProductGrid.skeleton.tsx,ProductGrid.tsx,ProductImages.tsx,ProductJsonLd.tsx,ProductSort.tsx,RelatedProducts.tsx,RelatedProductsAutoCarousel.client.tsx
features/products/hooks|useProduct.ts,useProductActions.ts,useProductFilter.ts,useProducts.ts
features/products/schema|product.schema.ts
features/profile|api.ts,profileApi.ts,types.ts
features/profile/components|AvatarUpload.tsx,ProfileForm.client.tsx,ProfileForm.tsx,ProfilePageContent.tsx,ProfilePageSkeleton.tsx
features/profile/hooks|useActiveReferralPoints.ts,useAddReferral.ts,useCities.ts,useProfile.ts,useUpdateProfile.ts
features/profile/schema|active-referral.schema.ts,profile.schema.ts,referral.schema.ts
features/reviews|api.ts,types.ts
features/reviews/components|RatingStars.tsx,ReviewCard.tsx,ReviewForm.tsx,ReviewJsonLd.tsx,ReviewList.tsx
features/reviews/hooks|useReviewActions.ts,useReviews.ts
features/reviews/schema|review.schema.ts
features/wishlist|api.ts,types.ts,wishlistApi.ts
features/wishlist/components|WishlistButton.tsx,WishlistGrid.tsx,WishlistPageContent.tsx,WishlistSyncProvider.tsx,WishlistToggleButton.tsx
features/wishlist/hooks|useWishlist.ts
hooks|useDebounce.ts,useHeroExitTrigger.ts,useIntersectionObserver.ts,useIsClient.ts,useLocalStorage.ts,useMediaQuery.ts
lib|storefront-data.ts
lib/api|axiosInstance.ts,interceptors.ts
lib/auth|session.ts
lib/seo|jsonld.ts,metadata.ts,opengraph.ts,site-url.ts
lib/utils|cn.ts,currency.ts,discount.ts,formatters.ts,seo-helpers.ts,transformResponse.ts
store|baseApi.ts,hooks.ts,index.ts
store/middleware|listenerMiddleware.ts
store/selectors|headerSelectors.ts
store/slices|authSlice.ts,cartSlice.ts,uiSlice.ts,wishlistSlice.ts
types|api.types.ts,cart.types.ts,common.types.ts,order.types.ts,product.types.ts,seo.types.ts,user.types.ts
`;

export const architectureProjects: ArchitectureProject[] = [
  {
    name: "Shipping Management System", short: "Shipping", stack: "NEXT.JS · TYPESCRIPT",
    note: "Role-based dashboards, domain features, shared UI, and typed state.",
    tree: parseListing(shipping),
  },
  {
    name: "YUMA", short: "YUMA", stack: "NEXT.JS · STOREFRONT",
    note: "Storefront routes, server endpoints, domain modules, and SEO utilities.",
    tree: parseListing(yuma),
  },
  {
    name: "School System", short: "School", stack: "NEXT.JS · DASHBOARD",
    note: "Role-specific routes, independently organized features, and tested realtime flows.",
    tree: parseListing(school),
  },
  {
    name: "FreshCart", short: "FreshCart", stack: "REACT · SPA",
    note: "A React SPA with clear routing, context, services, and validation layers.",
    tree: parseListing(freshCart),
  },
];

export function countArchitectureNodes(nodes: ArchitectureNode[]): { folders: number; files: number } {
  return nodes.reduce((count, node) => {
    if (node.children) {
      const nested = countArchitectureNodes(node.children);
      count.folders += 1 + nested.folders;
      count.files += nested.files;
    } else {
      count.files += 1;
    }
    return count;
  }, { folders: 0, files: 0 });
}
