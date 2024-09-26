import { by, device, element, expect } from "detox";
import { TEST_ID } from "../src/testing/test.contant";
import { APP_ROUTER } from "../src/navigation/navigation.constant";

describe("HomeScreen", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("should scroll HomeCarousel and main list", async () => {
    await expect(element(by.id(TEST_ID.HOME_SCREEN))).toBeVisible();

    const carousel = element(by.id(TEST_ID.HOME_CAROUSEL));
    await expect(carousel).toBeVisible();
    await carousel.swipe("left", "fast", 1);
    await new Promise((resolve) => setTimeout(resolve, 200));

    const mainList = element(by.id(TEST_ID.HOME_MAIN_LIST));
    await expect(mainList).toBeVisible();

    await mainList.swipe("up", "fast", 1);
    await new Promise((resolve) => setTimeout(resolve, 200));
    await mainList.swipe("down", "fast", 1);
    await new Promise((resolve) => setTimeout(resolve, 200));
    await mainList.swipe("up", "slow", 1);
  });

  it("should scroll horizontal list", async () => {
    const horizontalList = element(by.id(`${TEST_ID.HORIZONTAL_LIST}-0`));
    await expect(horizontalList).toBeVisible();
    await horizontalList.swipe("left", "fast", 1);
    await new Promise((resolve) => setTimeout(resolve, 300));
  });

  it("should add film to favorites", async () => {
    const targetFilmItem = element(
      by.id(`${TEST_ID.HORIZONTAL_LIST}-0-${TEST_ID.FILM_ITEM}-4`)
    );
    await expect(targetFilmItem).toBeVisible();

    const favoriteButton = element(
      by.id(
        `${TEST_ID.HORIZONTAL_LIST}-0-${TEST_ID.FILM_ITEM}-4-${TEST_ID.FAVORITE_BTN}`
      )
    );
    await expect(favoriteButton).toBeVisible();
    await favoriteButton.tap();

    const favoriteTab = element(
      by.id(`${TEST_ID.TAB_BAR_ITEM}-${APP_ROUTER.FAVORITE_SCREEN}`)
    );
    await expect(favoriteTab).toBeVisible();
    await favoriteTab.tap();

    await expect(element(by.id(TEST_ID.FAVORITE_SCREEN))).toBeVisible();
  });

  it("should book a ticket", async () => {
    const homeTab = element(
      by.id(`${TEST_ID.TAB_BAR_ITEM}-${APP_ROUTER.HOME_SCREEN}`)
    );
    await expect(homeTab).toBeVisible();
    await homeTab.tap();

    await expect(element(by.id(TEST_ID.HOME_SCREEN))).toBeVisible();

    const horizontalList = element(by.id(`${TEST_ID.HORIZONTAL_LIST}-0`));
    await expect(horizontalList).toBeVisible();
    await horizontalList.swipe("right", "fast", 1);
    await new Promise((resolve) => setTimeout(resolve, 300));

    const targetFilmItem = element(
      by.id(`${TEST_ID.HORIZONTAL_LIST}-0-${TEST_ID.FILM_ITEM}-0`)
    );
    await expect(targetFilmItem).toBeVisible();

    const bookingButton = element(
      by.id(
        `${TEST_ID.HORIZONTAL_LIST}-0-${TEST_ID.FILM_ITEM}-0-${TEST_ID.BOOK_BTN}`
      )
    );
    await expect(bookingButton).toBeVisible();
    await bookingButton.tap();

    await expect(element(by.id(TEST_ID.BOOKING_SCREEN))).toBeVisible();
    const seatSelection = element(by.id(TEST_ID.SEAT_SELECTION));
    await expect(seatSelection).toBeVisible();
    const seatBtn = element(by.id(`${TEST_ID.SEAT}-H4`));
    await expect(seatBtn).toBeVisible();
    await seatBtn.tap();
    const btnBookDone = element(by.id(TEST_ID.FINISH_BOOK_BTN));
    await expect(btnBookDone).toBeVisible();
    await btnBookDone.tap();
    await expect(element(by.id(TEST_ID.TICKETS_SCREEN))).toBeVisible();
  });

  it("should verify data in favorite and tickets tabs", async () => {
    await expect(element(by.id(TEST_ID.TICKETS_SCREEN))).toBeVisible();
    await element(by.id(TEST_ID.TICKETS_LIST)).scroll(500, "down");

    const favoriteTab = element(
      by.id(`${TEST_ID.TAB_BAR_ITEM}-${APP_ROUTER.FAVORITE_SCREEN}`)
    );
    await expect(favoriteTab).toBeVisible();
    await favoriteTab.tap();

    await expect(element(by.id(TEST_ID.FAVORITE_SCREEN))).toBeVisible();
    await element(by.id(TEST_ID.FAVORITE_LIST)).scroll(500, "down");
  });
});
