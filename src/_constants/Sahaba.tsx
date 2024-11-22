import type { CSSProperties } from 'react';
import type { CollapseProps } from 'antd';

  export const companionsData: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) =>  [
    {
      key: "1",
      label: "أبو بكر الصديق",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>اسمه: عبد الله بن عثمان التيمي</li>
            <li>أول خليفة راشد</li>
            <li>صاحب النبي محمد ﷺ في الغار</li>
            <li>أول من أسلم من الرجال</li>
            <li>صهر النبي ﷺ وأبو زوجته عائشة</li>
            <li>توفي سنة 13 هـ</li>
          </ul>
        </>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      style: panelStyle,
      label: "أبو ذر الغفاري",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>اسمه: جندب بن جنادة</li>
            <li>من السابقين الأولين للإسلام</li>
            <li>معروف بالزهد والورع</li>
            <li>من أوائل المسلمين في مكة</li>
            <li>اشتهر بالصدق والإخلاص</li>
            <li>توفي سنة 32 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "3",
      style: panelStyle,
      label: "أبو هريرة الدوسي",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>اسمه: عبد الرحمن بن صخر</li>
            <li>أكثر الصحابة رواية للحديث</li>
            <li>أسلم في عام خيبر</li>
            <li>روى أكثر من 5374 حديثاً</li>
            <li>لُقب بـ "حافظ الأمة"</li>
            <li>توفي سنة 59 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "4",
      style: panelStyle,
      label: "أبي بن كعب",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من كتّاب الوحي</li>
            <li>أول من جمع القرآن</li>
            <li>كان معلماً للصحابة</li>
            <li>وصفه النبي ﷺ بأنه أعلم الأمة بالقرآن</li>
            <li>توفي سنة 30 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "5",
      style: panelStyle,
      label: "بلال بن رباح",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أول مؤذن في الإسلام</li>
            <li>عبد أسود من أصل حبشي</li>
            <li>من المعذبين في مكة بسبب إسلامه</li>
            <li>من المبشرين بالجنة</li>
            <li>سُمع صوته بالأذان في الجنة</li>
            <li>توفي سنة 20 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "6",
      style: panelStyle,
      label: "بريدة الأسلمي",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من الصحابة المشهورين</li>
            <li>شهد غزوات عديدة مع النبي ﷺ</li>
            <li>راوي أحاديث كثيرة</li>
            <li>قائد عسكري بارز</li>
            <li>توفي سنة 63 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "7",
      style: panelStyle,
      label: "تميم الداري",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من الصحابة المشهورين</li>
            <li>راهب نصراني أسلم</li>
            <li>من رواة الحديث</li>
            <li>معروف بقصة الجساسة</li>
            <li>توفي سنة 40 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "8",
      style: panelStyle,
      label: "تميمة بن أوس",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>صحابي معروف</li>
            <li>من أهل المدينة المنورة</li>
            <li>شارك في فتوحات الشام</li>
            <li>معروف بشجاعته وإخلاصه</li>
          </ul>
        </>
      ),
    },
    {
      key: "9",
      style: panelStyle,
      label: "جابر بن عبد الله",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>آخر الصحابة وفاة بالمدينة</li>
            <li>راوي أكثر من 1500 حديث</li>
            <li>صاحب مناقب كثيرة</li>
            <li>عاش حتى سنة 78 هـ</li>
            <li>شهد العديد من الغزوات</li>
          </ul>
        </>
      ),
    },
    {
      key: "10",
      style: panelStyle,
      label: "جرير بن عبد الله",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من القادة البارزين</li>
            <li>أسلم قبل فتح مكة</li>
            <li>معروف بفصاحته وبلاغته</li>
            <li>شارك في فتوحات الشام والعراق</li>
            <li>توفي سنة 51 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "11",
      label: "حذيفة بن اليمان",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>صاحب سر رسول الله ﷺ</li>
            <li>كان يعرف المنافقين</li>
            <li>من كبار الصحابة المطلعين</li>
            <li>شهد العديد من الغزوات</li>
            <li>توفي سنة 36 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "12",
      style: panelStyle,
      label: "خباب بن الأرت",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من السابقين الأولين للإسلام</li>
            <li>تعرض للتعذيب في مكة</li>
            <li>حرفته الحدادة</li>
            <li>من أوائل المهاجرين</li>
            <li>توفي سنة 37 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "13",
      style: panelStyle,
      label: "زيد بن ثابت",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>كاتب الوحي الرئيسي</li>
            <li>حافظ القرآن الكريم</li>
            <li>كان يتقن عدة لغات</li>
            <li>جمع القرآن في عهد أبي بكر وعثمان</li>
            <li>توفي سنة 45 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "14",
      style: panelStyle,
      label: "سلمان الفارسي",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أول فارسي يسلم</li>
            <li>كان عبداً ثم تحرر</li>
            <li>من المقربين للنبي ﷺ</li>
            <li>شارك في غزوة الخندق بفكرة حفر الخندق</li>
            <li>توفي سنة 35 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "15",
      style: panelStyle,
      label: "سعد بن أبي وقاص",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أول من رمى بسهم في سبيل الله</li>
            <li>أحد القادة العسكريين البارزين</li>
            <li>فاتح العراق</li>
            <li>من العشرة المبشرين بالجنة</li>
            <li>توفي سنة 55 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "16",
      style: panelStyle,
      label: "صهيب الرومي",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من السابقين الأولين للإسلام</li>
            <li>كان من الموالي الروم</li>
            <li>من المهاجرين الأوائل</li>
            <li>معروف بكرمه وشجاعته</li>
            <li>توفي سنة 38 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "17",
      style: panelStyle,
      label: "طلحة بن عبيد الله",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>أحد العشرة المبشرين بالجنة</li>
            <li>من كبار التجار في المدينة</li>
            <li>شهد بيعة الرضوان</li>
            <li>قُتل في معركة الجمل</li>
            <li>توفي سنة 36 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "18",
      style: panelStyle,
      label: "عبد الله بن عباس",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>ابن عم النبي ﷺ</li>
            <li>لُقب بـ "حبر الأمة"</li>
            <li>عالم التفسير الأول</li>
            <li>روى العديد من الأحاديث</li>
            <li>توفي سنة 68 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "19",
      style: panelStyle,
      label: "عبد الله بن مسعود",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من السابقين الأولين للإسلام</li>
            <li>ثالث من أسلم</li>
            <li>قارئ القرآن المشهور</li>
            <li>من حفظة الوحي</li>
            <li>توفي سنة 32 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "20",
      style: panelStyle,
      label: "عثمان بن عفان",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>الخليفة الثالث</li>
            <li>أحد العشرة المبشرين بالجنة</li>
            <li>جمع المسلمين على مصحف واحد</li>
            <li>ذو النورين لزواجه من ابنتي النبي ﷺ</li>
            <li>توفي سنة 35 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "21",
      style: panelStyle,
      label: "علي بن أبي طالب",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>ابن عم وصهر النبي ﷺ</li>
            <li>الخليفة الرابع</li>
            <li>أسد الله الغالب</li>
            <li>أول من أسلم من الصبيان</li>
            <li>توفي سنة 40 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "22",
      style: panelStyle,
      label: "عمر بن الخطاب",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>الخليفة الثاني</li>
            <li>أحد العشرة المبشرين بالجنة</li>
            <li>فُتحت في عهده بلاد كثيرة</li>
            <li>اشتهر بالعدل والحزم</li>
            <li>توفي سنة 23 هـ</li>
          </ul>
        </>
      ),
    },
    {
      key: "23",
      style: panelStyle,
      label: "عمار بن ياسر",
      children: (
        <>
          <ul className="px-3 text-xl">
            <li>من المستضعفين الأوائل</li>
            <li>تعرض للتعذيب في مكة</li>
            <li>من السابقين الأولين</li>
            <li>استشهد في معركة صفين</li>
            <li>توفي سنة 37 هـ</li>
          </ul>
        </>
      ),
    },
    {
        key: "24",
      style: panelStyle,
        label: "قيس بن سعد",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>قائد عسكري بارز</li>
              <li>من أنصار علي بن أبي طالب</li>
              <li>شارك في معارك الفتوحات</li>
              <li>معروف بشجاعته وحكمته</li>
              <li>توفي سنة 60 هـ</li>
            </ul>
          </>
        ),
      },
      {
        key: "25",
      style: panelStyle,
        label: "كعب الأحبار",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>تابعي يمني من أهل اليمن</li>
              <li>كان عالماً بالكتب السماوية</li>
              <li>أسلم بعد وفاة النبي ﷺ</li>
              <li>نقل العديد من الروايات</li>
              <li>توفي سنة 32 هـ</li>
            </ul>
          </>
        ),
      },
      {
        key: "26",
      style: panelStyle,
        label: "مالك الأشتر",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>من أنصار علي بن أبي طالب</li>
              <li>قائد عسكري شجاع</li>
              <li>له دور بارز في الفتوحات</li>
              <li>معروف بحكمته وشدته</li>
              <li>توفي سنة 38 هـ</li>
            </ul>
          </>
        ),
      },
      {
        key: "27",
      style: panelStyle,
        label: "معاذ بن جبل",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>من العلماء البارزين</li>
              <li>أول من جمع القرآن باليمن</li>
              <li>واله النبي ﷺ على اليمن</li>
              <li>معروف بالفقه والعلم</li>
              <li>توفي سنة 18 هـ</li>
            </ul>
          </>
        ),
      },
      {
        key: "28",
      style: panelStyle,
        label: "نافع مولى ابن عمر",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>راوي حديث مشهور</li>
              <li>من رواة السنة المعتمدين</li>
              <li>عاش مع عبد الله بن عمر</li>
              <li>موثوق بروايته</li>
              <li>توفي سنة 117 هـ</li>
            </ul>
          </>
        ),
      },
      {
        key: "29",
      style: panelStyle,
        label: "هاشم بن عتبة",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>صحابي من الأنصار</li>
              <li>شارك في الفتوحات</li>
              <li>معروف بالشجاعة والإخلاص</li>
              <li>من رواة الحديث</li>
              <li>توفي سنة 40 هـ</li>
            </ul>
          </>
        ),
      },
      {
        key: "30",
      style: panelStyle,
        label: "وائل بن حجر",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>صحابي من حضرموت</li>
              <li>من الوفود إلى النبي ﷺ</li>
              <li>شارك في الفتوحات</li>
              <li>معروف بالشعر والفصاحة</li>
              <li>توفي سنة 50 هـ</li>
            </ul>
          </>
        ),
      },
      {
        key: "31",
      style: panelStyle,
        label: "يزيد بن ركانة",
        children: (
          <>
            <ul className="px-3 text-xl">
              <li>صحابي من قريش</li>
              <li>أسلم قبل فتح مكة</li>
              <li>معروف بالشجاعة</li>
              <li>من المكثرين في الرواية</li>
              <li>توفي سنة 40 هـ</li>
            </ul>
          </>
        ),
      }]