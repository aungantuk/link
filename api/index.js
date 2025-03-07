const { Builder, By, until } = require('selenium-webdriver');

(async function autoClickFollowLink() {
    let driver = await new Builder().forBrowser('chrome').build(); // Bisa ganti 'firefox'

    try {
        // 1️⃣ Buka halaman redirect Facebook
        await driver.get('https://l.facebook.com/l.php?u=https%3A%2F%2Fs.shopee.co.id%2F6fSjppHJLR');

        // 2️⃣ Tunggu tombol "Follow Link" muncul
        let followButton = await driver.wait(
            until.elementLocated(By.xpath("//a[contains(text(), 'Follow Link')]")),
            5000
        );

        // 3️⃣ Scroll ke tombol "Follow Link"
        await driver.executeScript("arguments[0].scrollIntoView();", followButton);

        // 4️⃣ Klik tombol "Follow Link"
        await followButton.click();

        console.log("✅ Klik tombol 'Follow Link' berhasil!");
        
        // 5️⃣ Tunggu sampai halaman Shopee terbuka
        await driver.wait(until.urlContains("shopee"), 10000);
        
        console.log("✅ Halaman Shopee terbuka!");

        // **TIDAK menutup browser, agar halaman tetap terbuka**
        await driver.sleep(60000); // Tunggu 1 menit sebelum otomatis keluar (bisa diubah)
    
    } catch (error) {
        console.error("❌ Terjadi kesalahan:", error);
    }
})();
