# Hollywood Restaurant — İdarəetmə Paneli

Zal (masalar) və otaqların rezervasiya idarəetmə paneli. React + Vite + Firebase Realtime Database.

## Quraşdırma

```bash
npm install
cp .env.example .env
```

`.env` faylını Firebase Console → Project Settings → General → Your apps bölməsindəki
məlumatlarla doldur.

Firebase Console-da:
1. **Authentication → Sign-in method → Anonymous** aktiv et (PIN-auth arxa planda RTDB
   qaydalarını qorumaq üçün anonim sessiyadan istifadə edir).
2. **Realtime Database → Rules** bölməsinə `database.rules.json` faylının məzmununu yapışdır.

## İlk admin hesabının yaradılması (Vüsal)

Tətbiqə girmək üçün ən azı bir işçi qeydiyyatda olmalıdır, amma işçi əlavə etmək üçün
əvvəlcə daxil olmaq lazımdır — buna görə ilk admin Firebase Console-dan əl ilə yaradılır:

Realtime Database → `employees` node-una aşağıdakı struktura uyğun bir qeyd əlavə et:

```json
{
  "employees": {
    "vusal": {
      "name": "Vüsal",
      "phone": "05XXXXXXXX",
      "pin": "istədiyin PIN",
      "role": "admin",
      "assignedType": null,
      "assignedId": null
    }
  }
}
```

Bundan sonra tətbiqə bu telefon/PIN ilə daxil olub qalan işçiləri, otaqları və masaları
panel üzərindən idarə etmək mümkündür.

## Lokal işə salma

```bash
npm run dev
```

## Deploy (GitHub Pages)

`main` branch-ə push edildikdə `.github/workflows/deploy.yml` avtomatik build edib
GitHub Pages-ə yükləyir. Bunun üçün repo **Settings → Secrets and variables → Actions**
bölməsində aşağıdakı secret-lər əlavə olunmalıdır:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_DATABASE_URL`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

Repo **Settings → Pages → Source**-da `gh-pages` branch seçilməlidir (ilk workflow
işlədikdən sonra bu branch avtomatik yaranır).

## Struktur

- `rooms` / `tables` — otaq və masaların adı, tutumu, statusu (`boş` / `dolu` / `rezerv`)
- `reservations` — hər rezervasiya `targetType` və `targetId` ilə müvafiq otağa/masaya bağlıdır
- `employees` — telefon + PIN ilə giriş, `role` (`admin` / `işçi`), `assignedType`/`assignedId`
  ilə işçinin hansı otağa/masaya təyin olunduğu

Admin bütün otaq/masaları görür və idarə edir. Adi işçi yalnız özünə təyin olunmuş
otağa/masaya yönləndirilir.
